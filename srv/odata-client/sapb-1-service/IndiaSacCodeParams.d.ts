import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * IndiaSacCodeParams
 */
export interface IndiaSacCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Service Code.
     * @nullable
     */
    serviceCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[IndiaSacCodeParams.build]] instead.
 */
export declare function createIndiaSacCodeParams(json: any): IndiaSacCodeParams;
/**
 * IndiaSacCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IndiaSacCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[IndiaSacCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[IndiaSacCodeParams.serviceCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace IndiaSacCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): IndiaSacCodeParams;
}
//# sourceMappingURL=IndiaSacCodeParams.d.ts.map