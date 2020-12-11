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
exports.AlertManagementRecipient = exports.AlertManagementRecipientField = exports.createAlertManagementRecipient = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementRecipient.build]] instead.
 */
function createAlertManagementRecipient(json) {
    return AlertManagementRecipient.build(json);
}
exports.createAlertManagementRecipient = createAlertManagementRecipient;
/**
 * AlertManagementRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AlertManagementRecipientField = /** @class */ (function (_super) {
    __extends(AlertManagementRecipientField, _super);
    /**
     * Creates an instance of AlertManagementRecipientField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AlertManagementRecipientField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AlertManagementRecipient) || this;
        /**
         * Representation of the [[AlertManagementRecipient.userCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userCode = new core_1.ComplexTypeNumberPropertyField('UserCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[AlertManagementRecipient.sendEMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sendEMail = new core_1.ComplexTypeEnumPropertyField('SendEMail', _this);
        /**
         * Representation of the [[AlertManagementRecipient.sendSms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sendSms = new core_1.ComplexTypeEnumPropertyField('SendSMS', _this);
        /**
         * Representation of the [[AlertManagementRecipient.sendFax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sendFax = new core_1.ComplexTypeEnumPropertyField('SendFax', _this);
        /**
         * Representation of the [[AlertManagementRecipient.sendInternal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sendInternal = new core_1.ComplexTypeEnumPropertyField('SendInternal', _this);
        return _this;
    }
    return AlertManagementRecipientField;
}(core_1.ComplexTypeField));
exports.AlertManagementRecipientField = AlertManagementRecipientField;
var AlertManagementRecipient;
(function (AlertManagementRecipient) {
    /**
     * Metadata information on all properties of the `AlertManagementRecipient` complex type.
     */
    AlertManagementRecipient._propertyMetadata = [{
            originalName: 'UserCode',
            name: 'userCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SendEMail',
            name: 'sendEMail',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SendSMS',
            name: 'sendSms',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SendFax',
            name: 'sendFax',
            type: 'Edm.Enum',
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
        return core_1.deserializeComplexTypeV4(json, AlertManagementRecipient);
    }
    AlertManagementRecipient.build = build;
})(AlertManagementRecipient = exports.AlertManagementRecipient || (exports.AlertManagementRecipient = {}));
//# sourceMappingURL=AlertManagementRecipient.js.map