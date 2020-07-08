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
exports.PmProjectDocumentParams = exports.PmProjectDocumentParamsField = exports.createPmProjectDocumentParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmProjectDocumentParams.build]] instead.
 */
function createPmProjectDocumentParams(json) {
    return PmProjectDocumentParams.build(json);
}
exports.createPmProjectDocumentParams = createPmProjectDocumentParams;
/**
 * PmProjectDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmProjectDocumentParamsField = /** @class */ (function (_super) {
    __extends(PmProjectDocumentParamsField, _super);
    function PmProjectDocumentParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmProjectDocumentParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        return _this;
    }
    return PmProjectDocumentParamsField;
}(v4_1.ComplexTypeField));
exports.PmProjectDocumentParamsField = PmProjectDocumentParamsField;
var PmProjectDocumentParams;
(function (PmProjectDocumentParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); }
        });
    }
    PmProjectDocumentParams.build = build;
})(PmProjectDocumentParams = exports.PmProjectDocumentParams || (exports.PmProjectDocumentParams = {}));
//# sourceMappingURL=PmProjectDocumentParams.js.map