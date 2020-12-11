import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ChangeLogParams
 */
export interface ChangeLogParams {
    /**
     * Log Instance.
     * @nullable
     */
    logInstance?: number;
    /**
     * Updated Date.
     * @nullable
     */
    updatedDate?: Moment;
    /**
     * User Name.
     * @nullable
     */
    userName?: string;
    /**
     * Object Code.
     * @nullable
     */
    objectCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ChangeLogParams.build]] instead.
 */
export declare function createChangeLogParams(json: any): ChangeLogParams;
/**
 * ChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChangeLogParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChangeLogParams> {
    /**
     * Representation of the [[ChangeLogParams.logInstance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logInstance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogParams.updatedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    updatedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogParams.userName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogParams.objectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ChangeLogParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ChangeLogParams {
    /**
     * Metadata information on all properties of the `ChangeLogParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ChangeLogParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ChangeLogParams;
}
//# sourceMappingURL=ChangeLogParams.d.ts.map