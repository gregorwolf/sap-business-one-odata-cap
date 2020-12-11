import { BoBoeStatus } from './BoBoeStatus';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * RetornoCodeParams
 */
export interface RetornoCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Occurence Code.
     * @nullable
     */
    occurenceCode?: number;
    /**
     * Movement Code.
     * @nullable
     */
    movementCode?: number;
    /**
     * Boe Status.
     * @nullable
     */
    boeStatus?: BoBoeStatus;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Color.
     * @nullable
     */
    color?: number;
    /**
     * File Format.
     * @nullable
     */
    fileFormat?: string;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[RetornoCodeParams.build]] instead.
 */
export declare function createRetornoCodeParams(json: any): RetornoCodeParams;
/**
 * RetornoCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RetornoCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RetornoCodeParams> {
    /**
     * Representation of the [[RetornoCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RetornoCodeParams.occurenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    occurenceCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RetornoCodeParams.movementCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    movementCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RetornoCodeParams.boeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[RetornoCodeParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[RetornoCodeParams.color]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    color: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RetornoCodeParams.fileFormat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileFormat: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[RetornoCodeParams.bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of RetornoCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace RetornoCodeParams {
    /**
     * Metadata information on all properties of the `RetornoCodeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<RetornoCodeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): RetornoCodeParams;
}
//# sourceMappingURL=RetornoCodeParams.d.ts.map