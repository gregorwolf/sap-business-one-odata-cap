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
exports.ShowDifferenceParams = exports.ShowDifferenceParamsField = exports.createShowDifferenceParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ShowDifferenceParams.build]] instead.
 */
function createShowDifferenceParams(json) {
    return ShowDifferenceParams.build(json);
}
exports.createShowDifferenceParams = createShowDifferenceParams;
/**
 * ShowDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ShowDifferenceParamsField = /** @class */ (function (_super) {
    __extends(ShowDifferenceParamsField, _super);
    function ShowDifferenceParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ShowDifferenceParams.primaryKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryKey = new v4_1.ComplexTypeStringPropertyField('PrimaryKey', _this, 'Edm.String');
        /**
         * Representation of the [[ShowDifferenceParams.udoObjectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udoObjectCode = new v4_1.ComplexTypeStringPropertyField('UDOObjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[ShowDifferenceParams.logInstance2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logInstance2 = new v4_1.ComplexTypeNumberPropertyField('LogInstance2', _this, 'Edm.Int32');
        /**
         * Representation of the [[ShowDifferenceParams.logInstance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logInstance = new v4_1.ComplexTypeNumberPropertyField('LogInstance', _this, 'Edm.Int32');
        return _this;
    }
    return ShowDifferenceParamsField;
}(v4_1.ComplexTypeField));
exports.ShowDifferenceParamsField = ShowDifferenceParamsField;
var ShowDifferenceParams;
(function (ShowDifferenceParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PrimaryKey: function (primaryKey) { return ({ primaryKey: v4_1.edmToTs(primaryKey, 'Edm.String') }); },
            UDOObjectCode: function (udoObjectCode) { return ({ udoObjectCode: v4_1.edmToTs(udoObjectCode, 'Edm.String') }); },
            LogInstance2: function (logInstance2) { return ({ logInstance2: v4_1.edmToTs(logInstance2, 'Edm.Int32') }); },
            LogInstance: function (logInstance) { return ({ logInstance: v4_1.edmToTs(logInstance, 'Edm.Int32') }); }
        });
    }
    ShowDifferenceParams.build = build;
})(ShowDifferenceParams = exports.ShowDifferenceParams || (exports.ShowDifferenceParams = {}));
//# sourceMappingURL=ShowDifferenceParams.js.map