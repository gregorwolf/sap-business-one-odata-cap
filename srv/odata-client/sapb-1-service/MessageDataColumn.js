"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of MessageDataColumnField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function MessageDataColumnField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, MessageDataColumn) || this;
        /**
         * Representation of the [[MessageDataColumn.columnName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnName = new core_1.ComplexTypeStringPropertyField('ColumnName', _this, 'Edm.String');
        /**
         * Representation of the [[MessageDataColumn.link]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.link = new core_1.ComplexTypeEnumPropertyField('Link', _this);
        /**
         * Representation of the [[MessageDataColumn.messageDataLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.messageDataLines = new core_1.CollectionField('MessageDataLines', _this, MessageDataLine_1.MessageDataLine);
        return _this;
    }
    return MessageDataColumnField;
}(core_1.ComplexTypeField));
exports.MessageDataColumnField = MessageDataColumnField;
var MessageDataColumn;
(function (MessageDataColumn) {
    /**
     * Metadata information on all properties of the `MessageDataColumn` complex type.
     */
    MessageDataColumn._propertyMetadata = [{
            originalName: 'ColumnName',
            name: 'columnName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Link',
            name: 'link',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MessageDataLines',
            name: 'messageDataLines',
            type: MessageDataLine_1.MessageDataLine,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, MessageDataColumn);
    }
    MessageDataColumn.build = build;
})(MessageDataColumn = exports.MessageDataColumn || (exports.MessageDataColumn = {}));
//# sourceMappingURL=MessageDataColumn.js.map