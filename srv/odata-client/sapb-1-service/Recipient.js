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
exports.Recipient = exports.RecipientField = exports.createRecipient = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[Recipient.build]] instead.
 */
function createRecipient(json) {
    return Recipient.build(json);
}
exports.createRecipient = createRecipient;
/**
 * RecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RecipientField = /** @class */ (function (_super) {
    __extends(RecipientField, _super);
    /**
     * Creates an instance of RecipientField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RecipientField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, Recipient) || this;
        /**
         * Representation of the [[Recipient.userCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userCode = new core_1.ComplexTypeStringPropertyField('UserCode', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.userType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userType = new core_1.ComplexTypeEnumPropertyField('UserType', _this);
        /**
         * Representation of the [[Recipient.nameTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nameTo = new core_1.ComplexTypeStringPropertyField('NameTo', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.sendEmail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sendEmail = new core_1.ComplexTypeEnumPropertyField('SendEmail', _this);
        /**
         * Representation of the [[Recipient.emailAddress]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.emailAddress = new core_1.ComplexTypeStringPropertyField('EmailAddress', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.sendSms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sendSms = new core_1.ComplexTypeEnumPropertyField('SendSMS', _this);
        /**
         * Representation of the [[Recipient.cellularNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cellularNumber = new core_1.ComplexTypeStringPropertyField('CellularNumber', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.sendFax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sendFax = new core_1.ComplexTypeEnumPropertyField('SendFax', _this);
        /**
         * Representation of the [[Recipient.faxNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.faxNumber = new core_1.ComplexTypeStringPropertyField('FaxNumber', _this, 'Edm.String');
        /**
         * Representation of the [[Recipient.sendInternal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sendInternal = new core_1.ComplexTypeEnumPropertyField('SendInternal', _this);
        return _this;
    }
    return RecipientField;
}(core_1.ComplexTypeField));
exports.RecipientField = RecipientField;
var Recipient;
(function (Recipient) {
    /**
     * Metadata information on all properties of the `Recipient` complex type.
     */
    Recipient._propertyMetadata = [{
            originalName: 'UserCode',
            name: 'userCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UserType',
            name: 'userType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'NameTo',
            name: 'nameTo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SendEmail',
            name: 'sendEmail',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EmailAddress',
            name: 'emailAddress',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SendSMS',
            name: 'sendSms',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CellularNumber',
            name: 'cellularNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SendFax',
            name: 'sendFax',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FaxNumber',
            name: 'faxNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SendInternal',
            name: 'sendInternal',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, Recipient);
    }
    Recipient.build = build;
})(Recipient = exports.Recipient || (exports.Recipient = {}));
//# sourceMappingURL=Recipient.js.map