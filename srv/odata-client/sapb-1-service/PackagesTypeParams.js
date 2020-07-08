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
exports.PackagesTypeParams = exports.PackagesTypeParamsField = exports.createPackagesTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PackagesTypeParams.build]] instead.
 */
function createPackagesTypeParams(json) {
    return PackagesTypeParams.build(json);
}
exports.createPackagesTypeParams = createPackagesTypeParams;
/**
 * PackagesTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PackagesTypeParamsField = /** @class */ (function (_super) {
    __extends(PackagesTypeParamsField, _super);
    function PackagesTypeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PackagesTypeParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        return _this;
    }
    return PackagesTypeParamsField;
}(v4_1.ComplexTypeField));
exports.PackagesTypeParamsField = PackagesTypeParamsField;
var PackagesTypeParams;
(function (PackagesTypeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.Int32') }); }
        });
    }
    PackagesTypeParams.build = build;
})(PackagesTypeParams = exports.PackagesTypeParams || (exports.PackagesTypeParams = {}));
//# sourceMappingURL=PackagesTypeParams.js.map