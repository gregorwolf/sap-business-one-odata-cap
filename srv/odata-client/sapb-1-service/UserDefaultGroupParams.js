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
exports.UserDefaultGroupParams = exports.UserDefaultGroupParamsField = exports.createUserDefaultGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserDefaultGroupParams.build]] instead.
 */
function createUserDefaultGroupParams(json) {
    return UserDefaultGroupParams.build(json);
}
exports.createUserDefaultGroupParams = createUserDefaultGroupParams;
/**
 * UserDefaultGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserDefaultGroupParamsField = /** @class */ (function (_super) {
    __extends(UserDefaultGroupParamsField, _super);
    /**
     * Creates an instance of UserDefaultGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserDefaultGroupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserDefaultGroupParams) || this;
        /**
         * Representation of the [[UserDefaultGroupParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return UserDefaultGroupParamsField;
}(core_1.ComplexTypeField));
exports.UserDefaultGroupParamsField = UserDefaultGroupParamsField;
var UserDefaultGroupParams;
(function (UserDefaultGroupParams) {
    /**
     * Metadata information on all properties of the `UserDefaultGroupParams` complex type.
     */
    UserDefaultGroupParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserDefaultGroupParams);
    }
    UserDefaultGroupParams.build = build;
})(UserDefaultGroupParams = exports.UserDefaultGroupParams || (exports.UserDefaultGroupParams = {}));
//# sourceMappingURL=UserDefaultGroupParams.js.map