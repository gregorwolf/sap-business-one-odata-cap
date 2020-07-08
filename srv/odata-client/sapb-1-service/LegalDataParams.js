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
exports.LegalDataParams = exports.LegalDataParamsField = exports.createLegalDataParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[LegalDataParams.build]] instead.
 */
function createLegalDataParams(json) {
    return LegalDataParams.build(json);
}
exports.createLegalDataParams = createLegalDataParams;
/**
 * LegalDataParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LegalDataParamsField = /** @class */ (function (_super) {
    __extends(LegalDataParamsField, _super);
    function LegalDataParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[LegalDataParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LegalDataParams.sourceObjectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceObjectType = new v4_1.ComplexTypeStringPropertyField('SourceObjectType', _this, 'Edm.String');
        /**
         * Representation of the [[LegalDataParams.sourceObjectEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceObjectEntry = new v4_1.ComplexTypeNumberPropertyField('SourceObjectEntry', _this, 'Edm.Int32');
        return _this;
    }
    return LegalDataParamsField;
}(v4_1.ComplexTypeField));
exports.LegalDataParamsField = LegalDataParamsField;
var LegalDataParams;
(function (LegalDataParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            SourceObjectType: function (sourceObjectType) { return ({ sourceObjectType: v4_1.edmToTs(sourceObjectType, 'Edm.String') }); },
            SourceObjectEntry: function (sourceObjectEntry) { return ({ sourceObjectEntry: v4_1.edmToTs(sourceObjectEntry, 'Edm.Int32') }); }
        });
    }
    LegalDataParams.build = build;
})(LegalDataParams = exports.LegalDataParams || (exports.LegalDataParams = {}));
//# sourceMappingURL=LegalDataParams.js.map