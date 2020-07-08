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
exports.AccountCategoryParams = exports.AccountCategoryParamsField = exports.createAccountCategoryParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function AccountCategoryParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AccountCategoryParams.categoryCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.categoryCode = new v4_1.ComplexTypeNumberPropertyField('CategoryCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[AccountCategoryParams.categoryName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.categoryName = new v4_1.ComplexTypeStringPropertyField('CategoryName', _this, 'Edm.String');
        return _this;
    }
    return AccountCategoryParamsField;
}(v4_1.ComplexTypeField));
exports.AccountCategoryParamsField = AccountCategoryParamsField;
var AccountCategoryParams;
(function (AccountCategoryParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CategoryCode: function (categoryCode) { return ({ categoryCode: v4_1.edmToTs(categoryCode, 'Edm.Int32') }); },
            CategoryName: function (categoryName) { return ({ categoryName: v4_1.edmToTs(categoryName, 'Edm.String') }); }
        });
    }
    AccountCategoryParams.build = build;
})(AccountCategoryParams = exports.AccountCategoryParams || (exports.AccountCategoryParams = {}));
//# sourceMappingURL=AccountCategoryParams.js.map