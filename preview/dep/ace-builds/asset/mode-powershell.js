define('ace/mode/powershell_highlight_rules', [
    'require',
    'exports',
    'module',
    'ace/lib/oop',
    'ace/mode/text_highlight_rules',
    '../lib/oop',
    './text_highlight_rules'
], function (require, exports, module) {
    'use strict';
    var oop = require('../lib/oop');
    var TextHighlightRules = require('./text_highlight_rules').TextHighlightRules;
    var PowershellHighlightRules = function () {
        var keywords = 'function|if|else|elseif|switch|while|default|for|do|until|break|continue|' + 'foreach|return|filter|in|trap|throw|param|begin|process|end';
        var builtinFunctions = 'Get-Alias|Import-Alias|New-Alias|Set-Alias|Get-AuthenticodeSignature|Set-AuthenticodeSignature|' + 'Set-Location|Get-ChildItem|Clear-Item|Get-Command|Measure-Command|Trace-Command|' + 'Add-Computer|Checkpoint-Computer|Remove-Computer|Restart-Computer|Restore-Computer|Stop-Computer|' + 'Reset-ComputerMachinePassword|Test-ComputerSecureChannel|Add-Content|Get-Content|Set-Content|Clear-Content|' + 'Get-Command|Invoke-Command|Enable-ComputerRestore|Disable-ComputerRestore|Get-ComputerRestorePoint|Test-Connection|' + 'ConvertFrom-CSV|ConvertTo-CSV|ConvertTo-Html|ConvertTo-Xml|ConvertFrom-SecureString|ConvertTo-SecureString|' + 'Copy-Item|Export-Counter|Get-Counter|Import-Counter|Get-Credential|Get-Culture|' + 'Get-ChildItem|Get-Date|Set-Date|Remove-Item|Compare-Object|Get-Event|' + 'Get-WinEvent|New-Event|Remove-Event|Unregister-Event|Wait-Event|Clear-EventLog|' + 'Get-Eventlog|Limit-EventLog|New-Eventlog|Remove-EventLog|Show-EventLog|Write-EventLog|' + 'Get-EventSubscriber|Register-EngineEvent|Register-ObjectEvent|Register-WmiEvent|Get-ExecutionPolicy|Set-ExecutionPolicy|' + 'Export-Alias|Export-Clixml|Export-Console|Export-Csv|ForEach-Object|Format-Custom|' + 'Format-List|Format-Table|Format-Wide|Export-FormatData|Get-FormatData|Get-Item|' + 'Get-ChildItem|Get-Help|Add-History|Clear-History|Get-History|Invoke-History|' + 'Get-Host|Read-Host|Write-Host|Get-HotFix|Import-Clixml|Import-Csv|' + 'Invoke-Command|Invoke-Expression|Get-Item|Invoke-Item|New-Item|Remove-Item|' + 'Set-Item|Clear-ItemProperty|Copy-ItemProperty|Get-ItemProperty|Move-ItemProperty|New-ItemProperty|' + 'Remove-ItemProperty|Rename-ItemProperty|Set-ItemProperty|Get-Job|Receive-Job|Remove-Job|' + 'Start-Job|Stop-Job|Wait-Job|Stop-Process|Update-List|Get-Location|' + 'Pop-Location|Push-Location|Set-Location|Send-MailMessage|Add-Member|Get-Member|' + 'Move-Item|Compare-Object|Group-Object|Measure-Object|New-Object|Select-Object|' + 'Sort-Object|Where-Object|Out-Default|Out-File|Out-GridView|Out-Host|' + 'Out-Null|Out-Printer|Out-String|Convert-Path|Join-Path|Resolve-Path|' + 'Split-Path|Test-Path|Get-Pfxcertificate|Pop-Location|Push-Location|Get-Process|' + 'Start-Process|Stop-Process|Wait-Process|Enable-PSBreakpoint|Disable-PSBreakpoint|Get-PSBreakpoint|' + 'Set-PSBreakpoint|Remove-PSBreakpoint|Get-PSDrive|New-PSDrive|Remove-PSDrive|Get-PSProvider|' + 'Set-PSdebug|Enter-PSSession|Exit-PSSession|Export-PSSession|Get-PSSession|Import-PSSession|' + 'New-PSSession|Remove-PSSession|Disable-PSSessionConfiguration|Enable-PSSessionConfiguration|Get-PSSessionConfiguration|Register-PSSessionConfiguration|' + 'Set-PSSessionConfiguration|Unregister-PSSessionConfiguration|New-PSSessionOption|Add-PsSnapIn|Get-PsSnapin|Remove-PSSnapin|' + 'Get-Random|Read-Host|Remove-Item|Rename-Item|Rename-ItemProperty|Select-Object|' + 'Select-XML|Send-MailMessage|Get-Service|New-Service|Restart-Service|Resume-Service|' + 'Set-Service|Start-Service|Stop-Service|Suspend-Service|Sort-Object|Start-Sleep|' + 'ConvertFrom-StringData|Select-String|Tee-Object|New-Timespan|Trace-Command|Get-Tracesource|' + 'Set-Tracesource|Start-Transaction|Complete-Transaction|Get-Transaction|Use-Transaction|Undo-Transaction|' + 'Start-Transcript|Stop-Transcript|Add-Type|Update-TypeData|Get-Uiculture|Get-Unique|' + 'Update-Formatdata|Update-Typedata|Clear-Variable|Get-Variable|New-Variable|Remove-Variable|' + 'Set-Variable|New-WebServiceProxy|Where-Object|Write-Debug|Write-Error|Write-Host|' + 'Write-Output|Write-Progress|Write-Verbose|Write-Warning|Set-WmiInstance|Invoke-WmiMethod|' + 'Get-WmiObject|Remove-WmiObject|Connect-WSMan|Disconnect-WSMan|Test-WSMan|Invoke-WSManAction|' + 'Disable-WSManCredSSP|Enable-WSManCredSSP|Get-WSManCredSSP|New-WSManInstance|Get-WSManInstance|Set-WSManInstance|' + 'Remove-WSManInstance|Set-WSManQuickConfig|New-WSManSessionOption';
        var keywordMapper = this.createKeywordMapper({
                'support.function': builtinFunctions,
                'keyword': keywords
            }, 'identifier');
        var binaryOperatorsRe = 'eq|ne|ge|gt|lt|le|like|notlike|match|notmatch|replace|contains|notcontains|' + 'ieq|ine|ige|igt|ile|ilt|ilike|inotlike|imatch|inotmatch|ireplace|icontains|inotcontains|' + 'is|isnot|as|' + 'and|or|band|bor|not';
        this.$rules = {
            'start': [
                {
                    token: 'comment',
                    regex: '#.*$'
                },
                {
                    token: 'comment.start',
                    regex: '<#',
                    next: 'comment'
                },
                {
                    token: 'string',
                    regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                },
                {
                    token: 'string',
                    regex: '[\'](?:(?:\\\\.)|(?:[^\'\\\\]))*?[\']'
                },
                {
                    token: 'constant.numeric',
                    regex: '0[xX][0-9a-fA-F]+\\b'
                },
                {
                    token: 'constant.numeric',
                    regex: '[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b'
                },
                {
                    token: 'constant.language.boolean',
                    regex: '[$](?:[Tt]rue|[Ff]alse)\\b'
                },
                {
                    token: 'constant.language',
                    regex: '[$][Nn]ull\\b'
                },
                {
                    token: 'variable.instance',
                    regex: '[$][a-zA-Z][a-zA-Z0-9_]*\\b'
                },
                {
                    token: keywordMapper,
                    regex: '[a-zA-Z_$][a-zA-Z0-9_$\\-]*\\b'
                },
                {
                    token: 'keyword.operator',
                    regex: '\\-(?:' + binaryOperatorsRe + ')'
                },
                {
                    token: 'keyword.operator',
                    regex: '&|\\*|\\+|\\-|\\=|\\+=|\\-='
                },
                {
                    token: 'lparen',
                    regex: '[[({]'
                },
                {
                    token: 'rparen',
                    regex: '[\\])}]'
                },
                {
                    token: 'text',
                    regex: '\\s+'
                }
            ],
            'comment': [
                {
                    token: 'comment.end',
                    regex: '#>',
                    next: 'start'
                },
                {
                    token: 'doc.comment.tag',
                    regex: '^\\.\\w+'
                },
                {
                    token: 'comment',
                    regex: '\\w+'
                },
                {
                    token: 'comment',
                    regex: '.'
                }
            ]
        };
    };
    oop.inherits(PowershellHighlightRules, TextHighlightRules);
    exports.PowershellHighlightRules = PowershellHighlightRules;
});
define('ace/mode/matching_brace_outdent', [
    'require',
    'exports',
    'module',
    'ace/range',
    '../range'
], function (require, exports, module) {
    'use strict';
    var Range = require('../range').Range;
    var MatchingBraceOutdent = function () {
    };
    (function () {
        this.checkOutdent = function (line, input) {
            if (!/^\s+$/.test(line))
                return false;
            return /^\s*\}/.test(input);
        };
        this.autoOutdent = function (doc, row) {
            var line = doc.getLine(row);
            var match = line.match(/^(\s*\})/);
            if (!match)
                return 0;
            var column = match[1].length;
            var openBracePos = doc.findMatchingBracket({
                    row: row,
                    column: column
                });
            if (!openBracePos || openBracePos.row == row)
                return 0;
            var indent = this.$getIndent(doc.getLine(openBracePos.row));
            doc.replace(new Range(row, 0, row, column - 1), indent);
        };
        this.$getIndent = function (line) {
            return line.match(/^\s*/)[0];
        };
    }.call(MatchingBraceOutdent.prototype));
    exports.MatchingBraceOutdent = MatchingBraceOutdent;
});
define('ace/mode/behaviour/cstyle', [
    'require',
    'exports',
    'module',
    'ace/lib/oop',
    'ace/mode/behaviour',
    'ace/token_iterator',
    'ace/lib/lang',
    '../../lib/oop',
    '../behaviour',
    '../../token_iterator',
    '../../lib/lang'
], function (require, exports, module) {
    'use strict';
    var oop = require('../../lib/oop');
    var Behaviour = require('../behaviour').Behaviour;
    var TokenIterator = require('../../token_iterator').TokenIterator;
    var lang = require('../../lib/lang');
    var SAFE_INSERT_IN_TOKENS = [
            'text',
            'paren.rparen',
            'punctuation.operator'
        ];
    var SAFE_INSERT_BEFORE_TOKENS = [
            'text',
            'paren.rparen',
            'punctuation.operator',
            'comment'
        ];
    var context;
    var contextCache = {};
    var initContext = function (editor) {
        var id = -1;
        if (editor.multiSelect) {
            id = editor.selection.index;
            if (contextCache.rangeCount != editor.multiSelect.rangeCount)
                contextCache = { rangeCount: editor.multiSelect.rangeCount };
        }
        if (contextCache[id])
            return context = contextCache[id];
        context = contextCache[id] = {
            autoInsertedBrackets: 0,
            autoInsertedRow: -1,
            autoInsertedLineEnd: '',
            maybeInsertedBrackets: 0,
            maybeInsertedRow: -1,
            maybeInsertedLineStart: '',
            maybeInsertedLineEnd: ''
        };
    };
    var getWrapped = function (selection, selected, opening, closing) {
        var rowDiff = selection.end.row - selection.start.row;
        return {
            text: opening + selected + closing,
            selection: [
                0,
                selection.start.column + 1,
                rowDiff,
                selection.end.column + (rowDiff ? 0 : 1)
            ]
        };
    };
    var CstyleBehaviour = function () {
        this.add('braces', 'insertion', function (state, action, editor, session, text) {
            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            if (text == '{') {
                initContext(editor);
                var selection = editor.getSelectionRange();
                var selected = session.doc.getTextRange(selection);
                if (selected !== '' && selected !== '{' && editor.getWrapBehavioursEnabled()) {
                    return getWrapped(selection, selected, '{', '}');
                } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                    if (/[\]\}\)]/.test(line[cursor.column]) || editor.inMultiSelectMode) {
                        CstyleBehaviour.recordAutoInsert(editor, session, '}');
                        return {
                            text: '{}',
                            selection: [
                                1,
                                1
                            ]
                        };
                    } else {
                        CstyleBehaviour.recordMaybeInsert(editor, session, '{');
                        return {
                            text: '{',
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                }
            } else if (text == '}') {
                initContext(editor);
                var rightChar = line.substring(cursor.column, cursor.column + 1);
                if (rightChar == '}') {
                    var matching = session.$findOpeningBracket('}', {
                            column: cursor.column + 1,
                            row: cursor.row
                        });
                    if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                        CstyleBehaviour.popAutoInsertedClosing();
                        return {
                            text: '',
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                }
            } else if (text == '\n' || text == '\r\n') {
                initContext(editor);
                var closing = '';
                if (CstyleBehaviour.isMaybeInsertedClosing(cursor, line)) {
                    closing = lang.stringRepeat('}', context.maybeInsertedBrackets);
                    CstyleBehaviour.clearMaybeInsertedClosing();
                }
                var rightChar = line.substring(cursor.column, cursor.column + 1);
                if (rightChar === '}') {
                    var openBracePos = session.findMatchingBracket({
                            row: cursor.row,
                            column: cursor.column + 1
                        }, '}');
                    if (!openBracePos)
                        return null;
                    var next_indent = this.$getIndent(session.getLine(openBracePos.row));
                } else if (closing) {
                    var next_indent = this.$getIndent(line);
                } else {
                    CstyleBehaviour.clearMaybeInsertedClosing();
                    return;
                }
                var indent = next_indent + session.getTabString();
                return {
                    text: '\n' + indent + '\n' + next_indent + closing,
                    selection: [
                        1,
                        indent.length,
                        1,
                        indent.length
                    ]
                };
            } else {
                CstyleBehaviour.clearMaybeInsertedClosing();
            }
        });
        this.add('braces', 'deletion', function (state, action, editor, session, range) {
            var selected = session.doc.getTextRange(range);
            if (!range.isMultiLine() && selected == '{') {
                initContext(editor);
                var line = session.doc.getLine(range.start.row);
                var rightChar = line.substring(range.end.column, range.end.column + 1);
                if (rightChar == '}') {
                    range.end.column++;
                    return range;
                } else {
                    context.maybeInsertedBrackets--;
                }
            }
        });
        this.add('parens', 'insertion', function (state, action, editor, session, text) {
            if (text == '(') {
                initContext(editor);
                var selection = editor.getSelectionRange();
                var selected = session.doc.getTextRange(selection);
                if (selected !== '' && editor.getWrapBehavioursEnabled()) {
                    return getWrapped(selection, selected, '(', ')');
                } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                    CstyleBehaviour.recordAutoInsert(editor, session, ')');
                    return {
                        text: '()',
                        selection: [
                            1,
                            1
                        ]
                    };
                }
            } else if (text == ')') {
                initContext(editor);
                var cursor = editor.getCursorPosition();
                var line = session.doc.getLine(cursor.row);
                var rightChar = line.substring(cursor.column, cursor.column + 1);
                if (rightChar == ')') {
                    var matching = session.$findOpeningBracket(')', {
                            column: cursor.column + 1,
                            row: cursor.row
                        });
                    if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                        CstyleBehaviour.popAutoInsertedClosing();
                        return {
                            text: '',
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                }
            }
        });
        this.add('parens', 'deletion', function (state, action, editor, session, range) {
            var selected = session.doc.getTextRange(range);
            if (!range.isMultiLine() && selected == '(') {
                initContext(editor);
                var line = session.doc.getLine(range.start.row);
                var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
                if (rightChar == ')') {
                    range.end.column++;
                    return range;
                }
            }
        });
        this.add('brackets', 'insertion', function (state, action, editor, session, text) {
            if (text == '[') {
                initContext(editor);
                var selection = editor.getSelectionRange();
                var selected = session.doc.getTextRange(selection);
                if (selected !== '' && editor.getWrapBehavioursEnabled()) {
                    return getWrapped(selection, selected, '[', ']');
                } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                    CstyleBehaviour.recordAutoInsert(editor, session, ']');
                    return {
                        text: '[]',
                        selection: [
                            1,
                            1
                        ]
                    };
                }
            } else if (text == ']') {
                initContext(editor);
                var cursor = editor.getCursorPosition();
                var line = session.doc.getLine(cursor.row);
                var rightChar = line.substring(cursor.column, cursor.column + 1);
                if (rightChar == ']') {
                    var matching = session.$findOpeningBracket(']', {
                            column: cursor.column + 1,
                            row: cursor.row
                        });
                    if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                        CstyleBehaviour.popAutoInsertedClosing();
                        return {
                            text: '',
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                }
            }
        });
        this.add('brackets', 'deletion', function (state, action, editor, session, range) {
            var selected = session.doc.getTextRange(range);
            if (!range.isMultiLine() && selected == '[') {
                initContext(editor);
                var line = session.doc.getLine(range.start.row);
                var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
                if (rightChar == ']') {
                    range.end.column++;
                    return range;
                }
            }
        });
        this.add('string_dquotes', 'insertion', function (state, action, editor, session, text) {
            if (text == '"' || text == '\'') {
                initContext(editor);
                var quote = text;
                var selection = editor.getSelectionRange();
                var selected = session.doc.getTextRange(selection);
                if (selected !== '' && selected !== '\'' && selected != '"' && editor.getWrapBehavioursEnabled()) {
                    return getWrapped(selection, selected, quote, quote);
                } else if (!selected) {
                    var cursor = editor.getCursorPosition();
                    var line = session.doc.getLine(cursor.row);
                    var leftChar = line.substring(cursor.column - 1, cursor.column);
                    var rightChar = line.substring(cursor.column, cursor.column + 1);
                    var token = session.getTokenAt(cursor.row, cursor.column);
                    var rightToken = session.getTokenAt(cursor.row, cursor.column + 1);
                    if (leftChar == '\\' && token && /escape/.test(token.type))
                        return null;
                    var stringBefore = token && /string/.test(token.type);
                    var stringAfter = !rightToken || /string/.test(rightToken.type);
                    var pair;
                    if (rightChar == quote) {
                        pair = stringBefore !== stringAfter;
                    } else {
                        if (stringBefore && !stringAfter)
                            return null;
                        if (stringBefore && stringAfter)
                            return null;
                        var wordRe = session.$mode.tokenRe;
                        wordRe.lastIndex = 0;
                        var isWordBefore = wordRe.test(leftChar);
                        wordRe.lastIndex = 0;
                        var isWordAfter = wordRe.test(leftChar);
                        if (isWordBefore || isWordAfter)
                            return null;
                        if (rightChar && !/[\s;,.})\]\\]/.test(rightChar))
                            return null;
                        pair = true;
                    }
                    return {
                        text: pair ? quote + quote : '',
                        selection: [
                            1,
                            1
                        ]
                    };
                }
            }
        });
        this.add('string_dquotes', 'deletion', function (state, action, editor, session, range) {
            var selected = session.doc.getTextRange(range);
            if (!range.isMultiLine() && (selected == '"' || selected == '\'')) {
                initContext(editor);
                var line = session.doc.getLine(range.start.row);
                var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
                if (rightChar == selected) {
                    range.end.column++;
                    return range;
                }
            }
        });
    };
    CstyleBehaviour.isSaneInsertion = function (editor, session) {
        var cursor = editor.getCursorPosition();
        var iterator = new TokenIterator(session, cursor.row, cursor.column);
        if (!this.$matchTokenType(iterator.getCurrentToken() || 'text', SAFE_INSERT_IN_TOKENS)) {
            var iterator2 = new TokenIterator(session, cursor.row, cursor.column + 1);
            if (!this.$matchTokenType(iterator2.getCurrentToken() || 'text', SAFE_INSERT_IN_TOKENS))
                return false;
        }
        iterator.stepForward();
        return iterator.getCurrentTokenRow() !== cursor.row || this.$matchTokenType(iterator.getCurrentToken() || 'text', SAFE_INSERT_BEFORE_TOKENS);
    };
    CstyleBehaviour.$matchTokenType = function (token, types) {
        return types.indexOf(token.type || token) > -1;
    };
    CstyleBehaviour.recordAutoInsert = function (editor, session, bracket) {
        var cursor = editor.getCursorPosition();
        var line = session.doc.getLine(cursor.row);
        if (!this.isAutoInsertedClosing(cursor, line, context.autoInsertedLineEnd[0]))
            context.autoInsertedBrackets = 0;
        context.autoInsertedRow = cursor.row;
        context.autoInsertedLineEnd = bracket + line.substr(cursor.column);
        context.autoInsertedBrackets++;
    };
    CstyleBehaviour.recordMaybeInsert = function (editor, session, bracket) {
        var cursor = editor.getCursorPosition();
        var line = session.doc.getLine(cursor.row);
        if (!this.isMaybeInsertedClosing(cursor, line))
            context.maybeInsertedBrackets = 0;
        context.maybeInsertedRow = cursor.row;
        context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket;
        context.maybeInsertedLineEnd = line.substr(cursor.column);
        context.maybeInsertedBrackets++;
    };
    CstyleBehaviour.isAutoInsertedClosing = function (cursor, line, bracket) {
        return context.autoInsertedBrackets > 0 && cursor.row === context.autoInsertedRow && bracket === context.autoInsertedLineEnd[0] && line.substr(cursor.column) === context.autoInsertedLineEnd;
    };
    CstyleBehaviour.isMaybeInsertedClosing = function (cursor, line) {
        return context.maybeInsertedBrackets > 0 && cursor.row === context.maybeInsertedRow && line.substr(cursor.column) === context.maybeInsertedLineEnd && line.substr(0, cursor.column) == context.maybeInsertedLineStart;
    };
    CstyleBehaviour.popAutoInsertedClosing = function () {
        context.autoInsertedLineEnd = context.autoInsertedLineEnd.substr(1);
        context.autoInsertedBrackets--;
    };
    CstyleBehaviour.clearMaybeInsertedClosing = function () {
        if (context) {
            context.maybeInsertedBrackets = 0;
            context.maybeInsertedRow = -1;
        }
    };
    oop.inherits(CstyleBehaviour, Behaviour);
    exports.CstyleBehaviour = CstyleBehaviour;
});
define('ace/mode/folding/cstyle', [
    'require',
    'exports',
    'module',
    'ace/lib/oop',
    'ace/range',
    'ace/mode/folding/fold_mode',
    '../../lib/oop',
    '../../range',
    './fold_mode'
], function (require, exports, module) {
    'use strict';
    var oop = require('../../lib/oop');
    var Range = require('../../range').Range;
    var BaseFoldMode = require('./fold_mode').FoldMode;
    var FoldMode = exports.FoldMode = function (commentRegex) {
            if (commentRegex) {
                this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, '|' + commentRegex.start));
                this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, '|' + commentRegex.end));
            }
        };
    oop.inherits(FoldMode, BaseFoldMode);
    (function () {
        this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
        this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
        this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
        this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
        this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
        this._getFoldWidgetBase = this.getFoldWidget;
        this.getFoldWidget = function (session, foldStyle, row) {
            var line = session.getLine(row);
            if (this.singleLineBlockCommentRe.test(line)) {
                if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                    return '';
            }
            var fw = this._getFoldWidgetBase(session, foldStyle, row);
            if (!fw && this.startRegionRe.test(line))
                return 'start';
            return fw;
        };
        this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
            var line = session.getLine(row);
            if (this.startRegionRe.test(line))
                return this.getCommentRegionBlock(session, line, row);
            var match = line.match(this.foldingStartMarker);
            if (match) {
                var i = match.index;
                if (match[1])
                    return this.openingBracketBlock(session, match[1], row, i);
                var range = session.getCommentFoldRange(row, i + match[0].length, 1);
                if (range && !range.isMultiLine()) {
                    if (forceMultiline) {
                        range = this.getSectionRange(session, row);
                    } else if (foldStyle != 'all')
                        range = null;
                }
                return range;
            }
            if (foldStyle === 'markbegin')
                return;
            var match = line.match(this.foldingStopMarker);
            if (match) {
                var i = match.index + match[0].length;
                if (match[1])
                    return this.closingBracketBlock(session, match[1], row, i);
                return session.getCommentFoldRange(row, i, -1);
            }
        };
        this.getSectionRange = function (session, row) {
            var line = session.getLine(row);
            var startIndent = line.search(/\S/);
            var startRow = row;
            var startColumn = line.length;
            row = row + 1;
            var endRow = row;
            var maxRow = session.getLength();
            while (++row < maxRow) {
                line = session.getLine(row);
                var indent = line.search(/\S/);
                if (indent === -1)
                    continue;
                if (startIndent > indent)
                    break;
                var subRange = this.getFoldWidgetRange(session, 'all', row);
                if (subRange) {
                    if (subRange.start.row <= startRow) {
                        break;
                    } else if (subRange.isMultiLine()) {
                        row = subRange.end.row;
                    } else if (startIndent == indent) {
                        break;
                    }
                }
                endRow = row;
            }
            return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
        };
        this.getCommentRegionBlock = function (session, line, row) {
            var startColumn = line.search(/\s*$/);
            var maxRow = session.getLength();
            var startRow = row;
            var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
            var depth = 1;
            while (++row < maxRow) {
                line = session.getLine(row);
                var m = re.exec(line);
                if (!m)
                    continue;
                if (m[1])
                    depth--;
                else
                    depth++;
                if (!depth)
                    break;
            }
            var endRow = row;
            if (endRow > startRow) {
                return new Range(startRow, startColumn, endRow, line.length);
            }
        };
    }.call(FoldMode.prototype));
});
define('ace/mode/powershell', [
    'require',
    'exports',
    'module',
    'ace/lib/oop',
    'ace/mode/text',
    'ace/mode/powershell_highlight_rules',
    'ace/mode/matching_brace_outdent',
    'ace/mode/behaviour/cstyle',
    'ace/mode/folding/cstyle',
    '../lib/oop',
    './text',
    './powershell_highlight_rules',
    './matching_brace_outdent',
    './behaviour/cstyle',
    './folding/cstyle'
], function (require, exports, module) {
    'use strict';
    var oop = require('../lib/oop');
    var TextMode = require('./text').Mode;
    var PowershellHighlightRules = require('./powershell_highlight_rules').PowershellHighlightRules;
    var MatchingBraceOutdent = require('./matching_brace_outdent').MatchingBraceOutdent;
    var CstyleBehaviour = require('./behaviour/cstyle').CstyleBehaviour;
    var CStyleFoldMode = require('./folding/cstyle').FoldMode;
    var Mode = function () {
        this.HighlightRules = PowershellHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
        this.$behaviour = new CstyleBehaviour();
        this.foldingRules = new CStyleFoldMode({
            start: '^\\s*(<#)',
            end: '^[#\\s]>\\s*$'
        });
    };
    oop.inherits(Mode, TextMode);
    (function () {
        this.lineCommentStart = '#';
        this.blockComment = {
            start: '<#',
            end: '#>'
        };
        this.getNextLineIndent = function (state, line, tab) {
            var indent = this.$getIndent(line);
            var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
            var tokens = tokenizedLine.tokens;
            if (tokens.length && tokens[tokens.length - 1].type == 'comment') {
                return indent;
            }
            if (state == 'start') {
                var match = line.match(/^.*[\{\(\[]\s*$/);
                if (match) {
                    indent += tab;
                }
            }
            return indent;
        };
        this.checkOutdent = function (state, line, input) {
            return this.$outdent.checkOutdent(line, input);
        };
        this.autoOutdent = function (state, doc, row) {
            this.$outdent.autoOutdent(doc, row);
        };
        this.createWorker = function (session) {
            return null;
        };
        this.$id = 'ace/mode/powershell';
    }.call(Mode.prototype));
    exports.Mode = Mode;
});