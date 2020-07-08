import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FiscalPrinterParams
 */
export interface FiscalPrinterParams {
    /**
     * Equipment No.
     * @nullable
     */
    equipmentNo?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FiscalPrinterParams.build]] instead.
 */
export declare function createFiscalPrinterParams(json: any): FiscalPrinterParams;
/**
 * FiscalPrinterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FiscalPrinterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FiscalPrinterParams.equipmentNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equipmentNo: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace FiscalPrinterParams {
    function build(json: {
        [keys: string]: FieldType;
    }): FiscalPrinterParams;
}
//# sourceMappingURL=FiscalPrinterParams.d.ts.map