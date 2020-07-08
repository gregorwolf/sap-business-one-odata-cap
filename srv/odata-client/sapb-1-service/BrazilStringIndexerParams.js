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
exports.BrazilStringIndexerParams = exports.BrazilStringIndexerParamsField = exports.createBrazilStringIndexerParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BrazilStringIndexerParams.build]] instead.
 */
function createBrazilStringIndexerParams(json) {
    return BrazilStringIndexerParams.build(json);
}
exports.createBrazilStringIndexerParams = createBrazilStringIndexerParams;
/**
 * BrazilStringIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BrazilStringIndexerParamsField = /** @class */ (function (_super) {
    __extends(BrazilStringIndexerParamsField, _super);
    function BrazilStringIndexerParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BrazilStringIndexerParams.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new v4_1.ComplexTypeNumberPropertyField('ID', _this, 'Edm.Int32');
        return _this;
    }
    return BrazilStringIndexerParamsField;
}(v4_1.ComplexTypeField));
exports.BrazilStringIndexerParamsField = BrazilStringIndexerParamsField;
var BrazilStringIndexerParams;
(function (BrazilStringIndexerParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ID: function (id) { return ({ id: v4_1.edmToTs(id, 'Edm.Int32') }); }
        });
    }
    BrazilStringIndexerParams.build = build;
})(BrazilStringIndexerParams = exports.BrazilStringIndexerParams || (exports.BrazilStringIndexerParams = {}));
//# sourceMappingURL=BrazilStringIndexerParams.js.map