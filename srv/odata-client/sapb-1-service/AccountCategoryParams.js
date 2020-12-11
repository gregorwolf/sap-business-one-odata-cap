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
exports.AccountCategoryParams = exports.AccountCategoryParamsField = exports.createAccountCategoryParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[AccountCategoryParams.build]] instead.
 */
function createAccountCategoryParams(json) {
    return AccountCategoryParams.build(json);
}
exports.createAccountCategoryParams = createAccountCategoryParams;
/**
 * AccountCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AccountCategoryParamsField = /** @class */ (function (_super) {
    __extends(AccountCategoryParamsField, _super);
    /**
     * Creates an instance of AccountCategoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AccountCategoryParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AccountCategoryParams) || this;
        /**
         * Representation of the [[AccountCategoryParams.categoryCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.categoryCode = new core_1.ComplexTypeNumberPropertyField('CategoryCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[AccountCategoryParams.categoryName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.categoryName = new core_1.ComplexTypeStringPropertyField('CategoryName', _this, 'Edm.String');
        return _this;
    }
    return AccountCategoryParamsField;
}(core_1.ComplexTypeField));
exports.AccountCategoryParamsField = AccountCategoryParamsField;
var AccountCategoryParams;
(function (AccountCategoryParams) {
    /**
     * Metadata information on all properties of the `AccountCategoryParams` complex type.
     */
    AccountCategoryParams._propertyMetadata = [{
            originalName: 'CategoryCode',
            name: 'categoryCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CategoryName',
            name: 'categoryName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AccountCategoryParams);
    }
    AccountCategoryParams.build = build;
})(AccountCategoryParams = exports.AccountCategoryParams || (exports.AccountCategoryParams = {}));
//# sourceMappingURL=AccountCategoryParams.js.map