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
exports.TableInfo = exports.TableInfoField = exports.createTableInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TableInfo.build]] instead.
 */
function createTableInfo(json) {
    return TableInfo.build(json);
}
exports.createTableInfo = createTableInfo;
/**
 * TableInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TableInfoField = /** @class */ (function (_super) {
    __extends(TableInfoField, _super);
    function TableInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TableInfo.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return TableInfoField;
}(v4_1.ComplexTypeField));
exports.TableInfoField = TableInfoField;
var TableInfo;
(function (TableInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); }
        });
    }
    TableInfo.build = build;
})(TableInfo = exports.TableInfo || (exports.TableInfo = {}));
//# sourceMappingURL=TableInfo.js.map