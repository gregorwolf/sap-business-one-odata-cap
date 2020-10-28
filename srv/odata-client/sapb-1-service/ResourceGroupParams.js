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
exports.ResourceGroupParams = exports.ResourceGroupParamsField = exports.createResourceGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ResourceGroupParams.build]] instead.
 */
function createResourceGroupParams(json) {
    return ResourceGroupParams.build(json);
}
exports.createResourceGroupParams = createResourceGroupParams;
/**
 * ResourceGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ResourceGroupParamsField = /** @class */ (function (_super) {
    __extends(ResourceGroupParamsField, _super);
    function ResourceGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ResourceGroupParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceGroupParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return ResourceGroupParamsField;
}(v4_1.ComplexTypeField));
exports.ResourceGroupParamsField = ResourceGroupParamsField;
var ResourceGroupParams;
(function (ResourceGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); }
        });
    }
    ResourceGroupParams.build = build;
})(ResourceGroupParams = exports.ResourceGroupParams || (exports.ResourceGroupParams = {}));
//# sourceMappingURL=ResourceGroupParams.js.map