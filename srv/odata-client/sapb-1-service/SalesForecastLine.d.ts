import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesForecastLine
 */
export interface SalesForecastLine {
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Forecasted Day.
     * @nullable
     */
    forecastedDay?: Moment;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesForecastLine.build]] instead.
 */
export declare function createSalesForecastLine(json: any): SalesForecastLine;
/**
 * SalesForecastLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesForecastLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesForecastLine> {
    /**
     * Representation of the [[SalesForecastLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesForecastLine.forecastedDay]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    forecastedDay: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SalesForecastLine.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesForecastLine.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of SalesForecastLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesForecastLine {
    /**
     * Metadata information on all properties of the `SalesForecastLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesForecastLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesForecastLine;
}
//# sourceMappingURL=SalesForecastLine.d.ts.map