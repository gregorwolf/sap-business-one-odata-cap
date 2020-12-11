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
exports.UpdateUserLicenseParams = exports.UpdateUserLicenseParamsField = exports.createUpdateUserLicenseParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UpdateUserLicenseParams.build]] instead.
 */
function createUpdateUserLicenseParams(json) {
    return UpdateUserLicenseParams.build(json);
}
exports.createUpdateUserLicenseParams = createUpdateUserLicenseParams;
/**
 * UpdateUserLicenseParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UpdateUserLicenseParamsField = /** @class */ (function (_super) {
    __extends(UpdateUserLicenseParamsField, _super);
    /**
     * Creates an instance of UpdateUserLicenseParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UpdateUserLicenseParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UpdateUserLicenseParams) || this;
        /**
         * Representation of the [[UpdateUserLicenseParams.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new core_1.ComplexTypeStringPropertyField('UserName', _this, 'Edm.String');
        /**
         * Representation of the [[UpdateUserLicenseParams.licenseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.licenseType = new core_1.ComplexTypeEnumPropertyField('LicenseType', _this);
        /**
         * Representation of the [[UpdateUserLicenseParams.licenseUpdateType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.licenseUpdateType = new core_1.ComplexTypeEnumPropertyField('LicenseUpdateType', _this);
        return _this;
    }
    return UpdateUserLicenseParamsField;
}(core_1.ComplexTypeField));
exports.UpdateUserLicenseParamsField = UpdateUserLicenseParamsField;
var UpdateUserLicenseParams;
(function (UpdateUserLicenseParams) {
    /**
     * Metadata information on all properties of the `UpdateUserLicenseParams` complex type.
     */
    UpdateUserLicenseParams._propertyMetadata = [{
            originalName: 'UserName',
            name: 'userName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LicenseType',
            name: 'licenseType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'LicenseUpdateType',
            name: 'licenseUpdateType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UpdateUserLicenseParams);
    }
    UpdateUserLicenseParams.build = build;
})(UpdateUserLicenseParams = exports.UpdateUserLicenseParams || (exports.UpdateUserLicenseParams = {}));
//# sourceMappingURL=UpdateUserLicenseParams.js.map