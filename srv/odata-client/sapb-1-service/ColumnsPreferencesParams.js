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
exports.ColumnsPreferencesParams = exports.ColumnsPreferencesParamsField = exports.createColumnsPreferencesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ColumnsPreferencesParams.build]] instead.
 */
function createColumnsPreferencesParams(json) {
    return ColumnsPreferencesParams.build(json);
}
exports.createColumnsPreferencesParams = createColumnsPreferencesParams;
/**
 * ColumnsPreferencesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ColumnsPreferencesParamsField = /** @class */ (function (_super) {
    __extends(ColumnsPreferencesParamsField, _super);
    function ColumnsPreferencesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ColumnsPreferencesParams.user]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.user = new v4_1.ComplexTypeNumberPropertyField('User', _this, 'Edm.Int32');
        /**
         * Representation of the [[ColumnsPreferencesParams.formId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formId = new v4_1.ComplexTypeStringPropertyField('FormID', _this, 'Edm.String');
        return _this;
    }
    return ColumnsPreferencesParamsField;
}(v4_1.ComplexTypeField));
exports.ColumnsPreferencesParamsField = ColumnsPreferencesParamsField;
var ColumnsPreferencesParams;
(function (ColumnsPreferencesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            User: function (user) { return ({ user: v4_1.edmToTs(user, 'Edm.Int32') }); },
            FormID: function (formId) { return ({ formId: v4_1.edmToTs(formId, 'Edm.String') }); }
        });
    }
    ColumnsPreferencesParams.build = build;
})(ColumnsPreferencesParams = exports.ColumnsPreferencesParams || (exports.ColumnsPreferencesParams = {}));
//# sourceMappingURL=ColumnsPreferencesParams.js.map