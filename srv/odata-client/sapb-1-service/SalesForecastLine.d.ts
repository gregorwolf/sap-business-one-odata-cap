import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class SalesForecastLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace SalesForecastLine {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesForecastLine;
}
//# sourceMappingURL=SalesForecastLine.d.ts.map