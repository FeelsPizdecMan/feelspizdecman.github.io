<!DOCTYPE html>
<html lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="15; url=../">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Поздравляем! Ваш заказ принят!</title>
 
 
 
</head>
<body>
<div class="wrap_block_success">
    <div class="block_success">
        <h2>Благодарим Вас за заказ!</h2>

        <p class="order_number"><span>Ваш заказ успешно принят и поставлен в обработку!</span></p>

        <p class="success">В ближайшее время с вами свяжется оператор для подтверждения заказа. Пожалуйста, включите ваш
            контактный телефон.</p>
			
			<h3 class="success" style="font-weight: bold;margin: 25px auto;">
                Пожалуйста, проверьте правильность введенной Вами информации.
            </h3>
            <div class="success" style="margin: 25px auto;">
                <ul class="list_info">
                    <li><span>Ф.И.O.:  </span><span id="client"><?php echo $name = $_GET['name']; ?></span></li>
                    <li><span>Телефон: </span><span id="tel"><?php echo $phone = $_GET['phone']; ?></span></li>
                </ul>
                <br/> 
            </div>
            <p style="margin: 25px auto;" class="fail success">Если вы ошиблись при заполнени формы, то, пожалуйста, <a href="javascript: history.back(-1);">заполните заявку еще раз</a></p>
    </div>
</div>












  
   
<style> 
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, summary, time, mark, audio, video { margin: 0px; padding: 0px; border: 0px none; font-family: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; font-size-adjust: inherit; font-stretch: inherit; font-feature-settings: inherit; font-language-override: inherit; font-kerning: inherit; font-synthesis: inherit; font-variant: inherit; font-size: 100%; vertical-align: baseline; } body { line-height: 1; height: 100%; font-family: Arial; font-size: 15px; color: rgb(49, 62, 71); } html { height: 100%; } h2 { font-size: 36px; line-height: 44px; color: rgb(49, 62, 71); text-align: center; text-transform: uppercase; font-weight: bold; } .wrap_block_success { width: 100%; height: 100%; background: url('point-bg.png') repeat scroll 0% 0% transparent; } .order_number { text-align: center; font-family: Arial; font-size: 30px; text-transform: uppercase; color: rgb(66, 66, 66); line-height: 38px; margin: 25px 0px; } .order_number span { color: rgb(225, 71, 64); } .block_success { max-width: 960px; padding: 70px 30px 0px; margin: 0px auto; } .success { text-align: center; } .firebugResetStyles { z-index: 2147483646 ! important; top: 0px ! important; left: 0px ! important; display: block ! important; border: 0px none ! important; margin: 0px ! important; padding: 0px ! important; outline: 0px none ! important; min-width: 0px ! important; max-width: none ! important; min-height: 0px ! important; max-height: none ! important; position: fixed ! important; transform: rotate(0deg) ! important; transform-origin: 50% 50% 0px ! important; border-radius: 0px ! important; box-shadow: none ! important; background: none repeat scroll 0% 0% transparent ! important; pointer-events: none ! important; white-space: normal ! important; } style.firebugResetStyles { display: none ! important; } .firebugResetStyles::before, .firebugResetStyles::after { content: "" ! important; } .list_info { 	text-align: left; 	display: inline-block; 	list-style: none; 	margin-top: -10px; 	margin-bottom: -11px; } .list_info li span { width: 150px; display: inline-block; font-weight: bold; font-style: normal; } .list_info {text-align: left;display: inline-block;list-style: none;margin-top: -10px;margin-bottom: -11px; } .list_info li { margin: 11px 0px; }
</style>
</body>
</html>
