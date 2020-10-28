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
exports.CertificateSeriesParams = exports.CertificateSeriesParamsField = exports.createCertificateSeriesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CertificateSeriesParams.build]] instead.
 */
function createCertificateSeriesParams(json) {
    return CertificateSeriesParams.build(json);
}
exports.createCertificateSeriesParams = createCertificateSeriesParams;
/**
 * CertificateSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CertificateSeriesParamsField = /** @class */ (function (_super) {
    __extends(CertificateSeriesParamsField, _super);
    function CertificateSeriesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CertificateSeriesParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[CertificateSeriesParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[CertificateSeriesParams.section]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.section = new v4_1.ComplexTypeNumberPropertyField('Section', _this, 'Edm.Int32');
        /**
         * Representation of the [[CertificateSeriesParams.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new v4_1.ComplexTypeNumberPropertyField('Location', _this, 'Edm.Int32');
        return _this;
    }
    return CertificateSeriesParamsField;
}(v4_1.ComplexTypeField));
exports.CertificateSeriesParamsField = CertificateSeriesParamsField;
var CertificateSeriesParams;
(function (CertificateSeriesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Section: function (section) { return ({ section: v4_1.edmToTs(section, 'Edm.Int32') }); },
            Location: function (location) { return ({ location: v4_1.edmToTs(location, 'Edm.Int32') }); }
        });
    }
    CertificateSeriesParams.build = build;
})(CertificateSeriesParams = exports.CertificateSeriesParams || (exports.CertificateSeriesParams = {}));
//# sourceMappingURL=CertificateSeriesParams.js.map