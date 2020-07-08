"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDataColumn = exports.MessageDataColumnField = exports.createMessageDataColumn = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var MessageDataLine_1 = require("./MessageDataLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[MessageDataColumn.build]] instead.
 */
function createMessageDataColumn(json) {
    return MessageDataColumn.build(json);
}
exports.createMessageDataColumn = createMessageDataColumn;
/**
 * MessageDataColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MessageDataColumnField = /** @class */ (function (_super) {
    __extends(MessageDataColumnField, _super);
    function MessageDataColumnField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MessageDataColumn.columnName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnName = new v4_1.ComplexTypeStringPropertyField('ColumnName', _this, 'Edm.String');
        /**
         * Representation of the [[MessageDataColumn.messageDataLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.messageDataLines = new MessageDataLine_1.MessageDataLineField('MessageDataLines', _this);
        return _this;
    }
    return MessageDataColumnField;
}(v4_1.ComplexTypeField));
exports.MessageDataColumnField = MessageDataColumnField;
var MessageDataColumn;
(function (MessageDataColumn) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ColumnName: function (columnName) { return ({ columnName: v4_1.edmToTs(columnName, 'Edm.String') }); },
            MessageDataLines: function (messageDataLines) { return ({ messageDataLines: MessageDataLine_1.MessageDataLine.build(messageDataLines) }); }
        });
    }
    MessageDataColumn.build = build;
})(MessageDataColumn = exports.MessageDataColumn || (exports.MessageDataColumn = {}));
//# sourceMappingURL=MessageDataColumn.js.map