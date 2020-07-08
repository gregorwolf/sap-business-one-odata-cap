import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ChangeLogParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ChangeLogParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ChangeLogParams;
}
//# sourceMappingURL=ChangeLogParams.d.ts.map