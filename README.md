# Bridge landing

## Старт проекта

    npm i

	gulp run

## Архитектура стилей

    scss/
    |
    |– base/
    |   |- _base.scss // Общие стили
    |   |– _reset.scss
    |   |– _fonts.scss
    |   …
    |
    |– components/
    |   |– _buttons.scss
    |   |– _carousel.scss
    |   |– _cover.scss
    |   |– _dropdown.scss
    |   …
    |
    |– helpers/
    |   |– _variables.scss
    |   |– _functions.scss
    |   |– _mixins.scss
    |   |– _placeholders.scss
    |
    |– layout/
    |   |– _navigation.scss
    |   |– _grid.scss
    |   |– _header.scss
    |   |– _footer.scss
    |   |– _sidebar.scss
    |   |– _forms.scss
    |   …
    |
    |– pages ## если REACT, то containers
    |   |– _home.scss
    |   |– _contact.scss
    |   …
    |
    |– themes/ ## Опционально
    |   |– _theme.scss
    |   |– _admin.scss
    |   …
    |
    |– vendors/
    |   |– _bootstrap.scss
    |   |– _semantic-ui.scss
    |   …
    |
    `– main.scss

---

# Основные требования к scss компонентам

- Ко всем button, a, input, textarea должны быть описаны состояния :hover, :active, :focus и др.
- button может замениться на a (ссылка) без искажения стилей
- названия классов и переменных через дефис
- **Вложенность селекторов не должна быть больше 3!** (:before, :after за вложенности не считаем)

    .page-container {
    	.content {
    		.profile {
    			// Стоп!
    		}
    	}
    }

- Порядок написания стилей для элемента:

		.btn {
			background: #e2e2e2; // Стили элемента
			font-weight: bold;

			@include transition(background 0.5s ease); // include

			&:after, &:before { // Псевдоэлементы  
				content: '';
			}

			&.additional-class { // Стили для дополнительных классов элемента
				some_style: style;
			}

			.icon { // Дочерние элементы
				margin-right: 10px;
			}
		}

- директиву @extend следует избегать!

## Подключение шрифтов

Первое свойство src отвечает за изначальный шрифт, во втором свойстве подключается шрифт в различных форматах (По надобности)

P.S. Шрифты в разных форматах нужны для нормальной поддержки, некоторые браузеры не поддерживают шрифты определенного формата (Например IE не все поддерживает)

**Font converter:** 

[Online font converter](https://onlinefontconverter.com/)

    $stolzl: "../fonts/stolzl";
    
    // stolzl regular
    @font-face {
    	font-family: "stolzl";
    	font-style: normal;
    	font-weight: 400;
    	src: url("#{$stolzl}/Stolzl-Regular.eot");
    	src: url("#{$stolzl}/Stolzl-Regular.woff2") format("woff2"),
    	url("#{$stolzl}/Stolzl-Regular.woff") format("woff"),
    	url("#{$stolzl}/Stolzl-Regular.otf") format("opentype"),
    	url("#{$stolzl}/Stolzl-Regular.ttf") format("truetype"),
    	url("#{$stolzl}/Stolzl-Regular.svg#Stolzl-Regular") format("svg");
    }

Миксин на шрифт:

    @mixin stolzl-regular {
    	-webkit-font-smoothing: antialiased;
    	-moz-osx-font-smoothing: grayscale;
    	font: {
    		family: "stolzl";
    		weight: 400;
    	}
    }

## Использование STYLELINT

Настройка IDE (vscode) 

Устанавливаем плагины

- **[stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)**
- **[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**

Пользовательские настройки vscode

    {
    	"[scss]": {
    		"editor.formatOnSave": true
    	},
    	"files.autoSave": "onFocusChange",
    	"prettier.stylelintIntegration": true,
    	"prettier.useTabs": true
    }

Стандарт синтаксиса scss  (.stylelintrc.json)

    {
        "ignoreFiles": "./app/scss/vendors/**/*",
        "plugins": [
            "stylelint-order"
        ],
        "rules": {
            "at-rule-no-unknown": [
                true,
                {
                    "ignoreAtRules": [
                        "content",
                        "else",
                        "extend",
                        "for",
                        "function",
                        "if",
                        "include",
                        "map",
                        "mixin"
                    ]
                }
            ],
            "block-no-empty": true,
            "color-hex-case": "lower",
            "color-named": "never",
            "color-no-invalid-hex": true,
            "comment-empty-line-before": [
                "always",
                {
                    "ignore": [
                        "after-comment",
                        "stylelint-commands"
                    ]
                }
            ],
            "declaration-block-no-duplicate-properties": true,
            "declaration-block-no-shorthand-property-overrides": true,
            "declaration-colon-space-after": "always",
            "declaration-colon-space-before": "never",
            "declaration-property-value-blacklist": {
                "/^border-bottom/": [
                    "none"
                ],
                "/^border-left/": [
                    "none"
                ],
                "/^border-right/": [
                    "none"
                ],
                "/^border-top/": [
                    "none"
                ],
                "/^border/": [
                    "none"
                ]
            },
            "function-comma-space-after": "always",
            "indentation": [
                "tab",
                {
                    "except": [
                        "value"
                    ]
                }
            ],
            "max-empty-lines": 2,
            "media-feature-colon-space-after": "always",
            "media-feature-colon-space-before": "never",
            "media-feature-name-no-vendor-prefix": true,
            "order/order": [
                "at-rules",
                "at-variables",
                "custom-properties",
                "declarations",
                "dollar-variables",
                "rules"
            ],
    		"order/properties-order": [
    			{
    			  "properties": ["content", "quotes"]
    			},
    			{
    			  "properties": ["flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "align-content", "align-items", "align-self", "justify-content", "order"]
    			},
    			{
    			  "properties": ["position", "top", "right", "bottom", "left", "z-index"]
    			},
    			{
    			  "properties": ["display", "width", "min-width", "max-width", "height", "min-height", "max-height", "visibility", "box-sizing", "overflow", "overflow-x", "overflow-y"]
    			},
    			{
    			  "properties": ["margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left"]
    			},
    			{
    			  "properties": ["float","clear"]
    			},
    			{
    			  "properties": ["border",
    				"border-top", "border-right", "border-bottom", "border-left", "border-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius", "border-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "border-spacing", "border-collapse"]
    			},
    			{
    			  "properties": ["background",
    				"background-color", "background-image", "background-repeat", "background-position", "background-size", "box-shadow", "fill"]
    			},
    			{
    			  "properties": ["color", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-effect", "font-style", "font-variant", "font-weight", "font-emphasize", "font-emphasize-position", "font-emphasize-style", "letter-spacing", "line-height", "list-style", "text-align", "text-align-last", "text-decoration", "text-indent", "text-justify", "text-overflow", "text-overflow-ellipsis", "text-overflow-mode", "text-rendering", "text-outline", "text-shadow", "text-transform", "text-wrap", "word-wrap", "word-break", "text-emphasis", "text-emphasis-color", "text-emphasis-style", "text-emphasis-position", "vertical-align", "white-space", "word-spacing", "hyphens", "src"]
    			},
    			{
    			  "properties": ["clip", "zoom", "columns", "column-gap", "column-fill", "column-rule", "column-span", "column-count", "column-width", "table-layout", "empty-cells", "caption-side", "list-style", "list-style-position", "list-style-type", "list-style-image", "transform", "transform-origin", "transform-style", "backface-visibility", "perspective", "perspective-origin", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset", "stroke", "opacity", "tab-size", "counter-reset", "counter-increment", "resize", "cursor", "pointer-events", "speak", "user-select", "nav-index", "nav-up", "nav-right", "nav-down", "nav-left"]
    			},
    			{
    			  "properties": ["transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay"]
    			},
    			{
    			  "properties": ["animation", "animation-name", "animation-duration", "animation-play-state", "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction"]
    			}
    		],
            "rule-empty-line-before": [
                "always",
                {
                    "except": [
                        "first-nested"
                    ],
                    "ignore": [
                        "after-comment"
                    ]
                }
            ],
            "selector-max-id": 0,
            "selector-pseudo-element-colon-notation": "single"
        }
    }
