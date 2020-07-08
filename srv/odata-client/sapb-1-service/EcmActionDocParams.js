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
exports.EcmActionDocParams = exports.EcmActionDocParamsField = exports.createEcmActionDocParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EcmActionDocParams.build]] instead.
 */
function createEcmActionDocParams(json) {
    return EcmActionDocParams.build(json);
}
exports.createEcmActionDocParams = createEcmActionDocParams;
/**
 * EcmActionDocParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EcmActionDocParamsField = /** @class */ (function (_super) {
    __extends(EcmActionDocParamsField, _super);
    function EcmActionDocParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EcmActionDocParams.protocol]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.protocol = new v4_1.ComplexTypeStringPropertyField('Protocol', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionDocParams.sourceType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceType = new v4_1.ComplexTypeStringPropertyField('SourceType', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionDocParams.sourceObject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceObject = new v4_1.ComplexTypeNumberPropertyField('SourceObject', _this, 'Edm.Int32');
        return _this;
    }
    return EcmActionDocParamsField;
}(v4_1.ComplexTypeField));
exports.EcmActionDocParamsField = EcmActionDocParamsField;
var EcmActionDocParams;
(function (EcmActionDocParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Protocol: function (protocol) { return ({ protocol: v4_1.edmToTs(protocol, 'Edm.String') }); },
            SourceType: function (sourceType) { return ({ sourceType: v4_1.edmToTs(sourceType, 'Edm.String') }); },
            SourceObject: function (sourceObject) { return ({ sourceObject: v4_1.edmToTs(sourceObject, 'Edm.Int32') }); }
        });
    }
    EcmActionDocParams.build = build;
})(EcmActionDocParams = exports.EcmActionDocParams || (exports.EcmActionDocParams = {}));
//# sourceMappingURL=EcmActionDocParams.js.map