import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class RetornoCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace RetornoCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): RetornoCodeParams;
}
//# sourceMappingURL=RetornoCodeParams.d.ts.map