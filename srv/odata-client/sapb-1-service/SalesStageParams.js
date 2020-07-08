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
exports.SalesStageParams = exports.SalesStageParamsField = exports.createSalesStageParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SalesStageParams.build]] instead.
 */
function createSalesStageParams(json) {
    return SalesStageParams.build(json);
}
exports.createSalesStageParams = createSalesStageParams;
/**
 * SalesStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesStageParamsField = /** @class */ (function (_super) {
    __extends(SalesStageParamsField, _super);
    function SalesStageParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesStageParams.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new v4_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        return _this;
    }
    return SalesStageParamsField;
}(v4_1.ComplexTypeField));
exports.SalesStageParamsField = SalesStageParamsField;
var SalesStageParams;
(function (SalesStageParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SequenceNo: function (sequenceNo) { return ({ sequenceNo: v4_1.edmToTs(sequenceNo, 'Edm.Int32') }); }
        });
    }
    SalesStageParams.build = build;
})(SalesStageParams = exports.SalesStageParams || (exports.SalesStageParams = {}));
//# sourceMappingURL=SalesStageParams.js.map