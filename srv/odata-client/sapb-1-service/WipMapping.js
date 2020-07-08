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
exports.WipMapping = exports.WipMappingField = exports.createWipMapping = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WipMapping.build]] instead.
 */
function createWipMapping(json) {
    return WipMapping.build(json);
}
exports.createWipMapping = createWipMapping;
/**
 * WipMappingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WipMappingField = /** @class */ (function (_super) {
    __extends(WipMappingField, _super);
    function WipMappingField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WipMapping.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WipMapping.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[WipMapping.accountFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountFrom = new v4_1.ComplexTypeStringPropertyField('AccountFrom', _this, 'Edm.String');
        /**
         * Representation of the [[WipMapping.accountTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountTo = new v4_1.ComplexTypeStringPropertyField('AccountTo', _this, 'Edm.String');
        return _this;
    }
    return WipMappingField;
}(v4_1.ComplexTypeField));
exports.WipMappingField = WipMappingField;
var WipMapping;
(function (WipMapping) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            AccountFrom: function (accountFrom) { return ({ accountFrom: v4_1.edmToTs(accountFrom, 'Edm.String') }); },
            AccountTo: function (accountTo) { return ({ accountTo: v4_1.edmToTs(accountTo, 'Edm.String') }); }
        });
    }
    WipMapping.build = build;
})(WipMapping = exports.WipMapping || (exports.WipMapping = {}));
//# sourceMappingURL=WipMapping.js.map