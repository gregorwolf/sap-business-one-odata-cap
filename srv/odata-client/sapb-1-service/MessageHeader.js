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
exports.MessageHeader = exports.MessageHeaderField = exports.createMessageHeader = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[MessageHeader.build]] instead.
 */
function createMessageHeader(json) {
    return MessageHeader.build(json);
}
exports.createMessageHeader = createMessageHeader;
/**
 * MessageHeaderField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MessageHeaderField = /** @class */ (function (_super) {
    __extends(MessageHeaderField, _super);
    /**
     * Creates an instance of MessageHeaderField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function MessageHeaderField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, MessageHeader) || this;
        /**
         * Representation of the [[MessageHeader.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[MessageHeader.received]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.received = new core_1.ComplexTypeEnumPropertyField('Received', _this);
        /**
         * Representation of the [[MessageHeader.read]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.read = new core_1.ComplexTypeEnumPropertyField('Read', _this);
        /**
         * Representation of the [[MessageHeader.receivedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receivedDate = new core_1.ComplexTypeDatePropertyField('ReceivedDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[MessageHeader.receivedTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receivedTime = new core_1.ComplexTypeTimePropertyField('ReceivedTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[MessageHeader.sentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sentDate = new core_1.ComplexTypeDatePropertyField('SentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[MessageHeader.sentTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sentTime = new core_1.ComplexTypeTimePropertyField('SentTime', _this, 'Edm.TimeOfDay');
        return _this;
    }
    return MessageHeaderField;
}(core_1.ComplexTypeField));
exports.MessageHeaderField = MessageHeaderField;
var MessageHeader;
(function (MessageHeader) {
    /**
     * Metadata information on all properties of the `MessageHeader` complex type.
     */
    MessageHeader._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Received',
            name: 'received',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Read',
            name: 'read',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReceivedDate',
            name: 'receivedDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReceivedTime',
            name: 'receivedTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'SentDate',
            name: 'sentDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'SentTime',
            name: 'sentTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, MessageHeader);
    }
    MessageHeader.build = build;
})(MessageHeader = exports.MessageHeader || (exports.MessageHeader = {}));
//# sourceMappingURL=MessageHeader.js.map