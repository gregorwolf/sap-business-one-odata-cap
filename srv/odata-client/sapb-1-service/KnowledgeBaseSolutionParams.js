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
exports.KnowledgeBaseSolutionParams = exports.KnowledgeBaseSolutionParamsField = exports.createKnowledgeBaseSolutionParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[KnowledgeBaseSolutionParams.build]] instead.
 */
function createKnowledgeBaseSolutionParams(json) {
    return KnowledgeBaseSolutionParams.build(json);
}
exports.createKnowledgeBaseSolutionParams = createKnowledgeBaseSolutionParams;
/**
 * KnowledgeBaseSolutionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var KnowledgeBaseSolutionParamsField = /** @class */ (function (_super) {
    __extends(KnowledgeBaseSolutionParamsField, _super);
    function KnowledgeBaseSolutionParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[KnowledgeBaseSolutionParams.solutionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.solutionCode = new v4_1.ComplexTypeNumberPropertyField('SolutionCode', _this, 'Edm.Int32');
        return _this;
    }
    return KnowledgeBaseSolutionParamsField;
}(v4_1.ComplexTypeField));
exports.KnowledgeBaseSolutionParamsField = KnowledgeBaseSolutionParamsField;
var KnowledgeBaseSolutionParams;
(function (KnowledgeBaseSolutionParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SolutionCode: function (solutionCode) { return ({ solutionCode: v4_1.edmToTs(solutionCode, 'Edm.Int32') }); }
        });
    }
    KnowledgeBaseSolutionParams.build = build;
})(KnowledgeBaseSolutionParams = exports.KnowledgeBaseSolutionParams || (exports.KnowledgeBaseSolutionParams = {}));
//# sourceMappingURL=KnowledgeBaseSolutionParams.js.map