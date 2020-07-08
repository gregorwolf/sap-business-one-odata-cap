import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ElectronicFileFormatParams
 */
export interface ElectronicFileFormatParams {
    /**
     * Format Id.
     * @nullable
     */
    formatId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ElectronicFileFormatParams.build]] instead.
 */
export declare function createElectronicFileFormatParams(json: any): ElectronicFileFormatParams;
/**
 * ElectronicFileFormatParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ElectronicFileFormatParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ElectronicFileFormatParams.formatId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formatId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicFileFormatParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ElectronicFileFormatParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ElectronicFileFormatParams;
}
//# sourceMappingURL=ElectronicFileFormatParams.d.ts.map