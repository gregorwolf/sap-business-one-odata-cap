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
exports.GtiParams = exports.GtiParamsField = exports.createGtiParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[GtiParams.build]] instead.
 */
function createGtiParams(json) {
    return GtiParams.build(json);
}
exports.createGtiParams = createGtiParams;
/**
 * GtiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GtiParamsField = /** @class */ (function (_super) {
    __extends(GtiParamsField, _super);
    function GtiParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GtiParams.inboundFile]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inboundFile = new v4_1.ComplexTypeStringPropertyField('InboundFile', _this, 'Edm.String');
        /**
         * Representation of the [[GtiParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        return _this;
    }
    return GtiParamsField;
}(v4_1.ComplexTypeField));
exports.GtiParamsField = GtiParamsField;
var GtiParams;
(function (GtiParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            InboundFile: function (inboundFile) { return ({ inboundFile: v4_1.edmToTs(inboundFile, 'Edm.String') }); },
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); }
        });
    }
    GtiParams.build = build;
})(GtiParams = exports.GtiParams || (exports.GtiParams = {}));
//# sourceMappingURL=GtiParams.js.map