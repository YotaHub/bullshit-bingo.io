//Button Content
var contentArray = ['<p class="block-content CENTER">Welcher Server ist das?</p>', '<p class="block-content CENTER">"der Mod"</p>', '<p class="block-content CENTER">Ich war kurz weg. Was ist passiert?</p>', '<p class="block-content CENTER">Cringe</p>', '<p class="block-content CENTER emoji">&#128521;</p>', '<p class="block-content CENTER">Geht das auch auf PS4?</p>', '<p class="block-content CENTER">lul (kleingeschrieben)</p>', '<p class="block-content CENTER">Wie heißt die Mod?</p>', '<p class="block-content CENTER">Metagaming</p>'];

//Write Captions to Buttons
for (i = 0; i <= 8; i++) {
    $(('#block-' + [i])).html(contentArray[i]); 
}

//Adding Check Icon for Hits
//<i class="fa fa-3x fa-check-circle checked CENTER" aria-hidden="true"></i>
$('.block-style').on('click', function(e) {
    
    //Toggle Selection
    $(this).toggleClass('block-style-checked');
    
    if ($(this).hasClass('block-style-checked')) {
        $(this).html('<i class="fa fa-2x fa-check-circle checked CENTER" aria-hidden="true"></i>');
    } else {
        //Updates Content
        var selfID = (this.id).split("-").pop();
        $(this).html(contentArray[selfID]);
    } 
    
    //Check Bingos
    var b00 = $('#block-0').hasClass('block-style-checked'),
        b01 = $('#block-1').hasClass('block-style-checked'),
        b02 = $('#block-2').hasClass('block-style-checked'),
        b03 = $('#block-3').hasClass('block-style-checked'),
        b04 = $('#block-4').hasClass('block-style-checked'),
        b05 = $('#block-5').hasClass('block-style-checked'),
        b06 = $('#block-6').hasClass('block-style-checked'),
        b07 = $('#block-7').hasClass('block-style-checked'),
        b08 = $('#block-8').hasClass('block-style-checked');
    
    //Bingo Combinations
    var bingo1 = b00 && b03 && b06,
        bingo2 = b01 && b04 && b07,
        bingo3 = b02 && b05 && b08,
        bingo4 = b00 && b01 && b02,
        bingo5 = b03 && b04 && b05,
        bingo6 = b06 && b07 && b08,
        bingo7 = b00 && b04 && b08,
        bingo8 = b02 && b04 && b06,
        bingoArray = [bingo1, bingo2, bingo3, bingo4, bingo5, bingo6, bingo7, bingo8];
    
    for (i = 0; i < 8; i++) {
        if(bingoArray[i]) {
            $('#point0' + i).removeClass('invisible');
        } else {
            $('#point0' + i).addClass('invisible');
        }
    }  
})