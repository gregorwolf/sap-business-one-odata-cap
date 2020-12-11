import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class FiscalPrinterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FiscalPrinterParams> {
    /**
     * Representation of the [[FiscalPrinterParams.equipmentNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equipmentNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of FiscalPrinterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FiscalPrinterParams {
    /**
     * Metadata information on all properties of the `FiscalPrinterParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FiscalPrinterParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FiscalPrinterParams;
}
//# sourceMappingURL=FiscalPrinterParams.d.ts.map