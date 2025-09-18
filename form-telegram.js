add_action( 'elementor_pro/forms/new_record', function( $record, $handler ) {
//make sure it's our form
$form_name = $record->get_form_settings( 'form_name' );
// Replace MY_FORM_NAME with the name you gave your form
$TelegramNotify = new nftb_TelegramNotify();
$token = $TelegramNotify->getValuefromconfig('token_0');
$chatids_ = $TelegramNotify->getValuefromconfig('chatids_');
$message = "\xF0\x9F\x93\xA3 New Hot Lead Just Registered!! Interested in ".$form_name." :
here are his details CALL HIM NOW!
First Name: [[firstName]]
Last Name: [[lastName]]
Email: [[email]]
Phone: [[phone]]
Zipcode: [[zipcode]]";
$apiToken = $token ;
$blog_title = get_the_title( $post_id );
$users=explode(",",$chatids_);
$bloginfo = get_bloginfo( 'name' );
$raw_fields = $record->get( 'fields' );
$fields = [];
foreach ( $raw_fields as $id => $field ) {
$label = $field['title']?? $id;
if($field['value']==''){
continue;
}
$fields[ $label ] = $field['value'];
//print_r($field);
}
//$saysomething = json_encode($fields);
$search = ["[[firstName]]", "[[lastName]]", "[[email]]", "[[zipcode]]", "[[phone]]"];
$replace = [$fields['Label1'], $fields['Label2'], $fields['Label3'], $fields['Label4'], $fields['Label5']];
$testmessage = str_replace($search,$replace,$message);
foreach ($users as $user)
{
if (empty($user)) continue;
$data = [
'chat_id' => $user,
'text' => cleanString($testmessage) ];
$response = wp_remote_get( "https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data), array( 'timeout' => 120, 'httpversion' => '1.1' ) );

}, 10, 2 );       
