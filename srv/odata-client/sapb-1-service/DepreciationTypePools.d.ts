import { DepreciationTypePoolsRequestBuilder } from './DepreciationTypePoolsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "DepreciationTypePools" of service "SAPB1".
 */
export declare class DepreciationTypePools extends Entity implements DepreciationTypePoolsType {
    /**
     * Technical entity name for DepreciationTypePools.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DepreciationTypePools.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * One-to-many navigation property to the [[DepreciationTypes]] entity.
     */
    depreciationTypes: DepreciationTypes[];
    /**
     * Returns an entity builder to construct instances `DepreciationTypePools`.
     * @returns A builder that constructs instances of entity type `DepreciationTypePools`.
     */
    static builder(): EntityBuilderType<DepreciationTypePools, DepreciationTypePoolsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DepreciationTypePools` entity type.
     * @returns A `DepreciationTypePools` request builder.
     */
    static requestBuilder(): DepreciationTypePoolsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationTypePools`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DepreciationTypePools`.
     */
    static customField(fieldName: string): CustomField<DepreciationTypePools>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DepreciationTypes, DepreciationTypesType } from './DepreciationTypes';
export interface DepreciationTypePoolsType {
    code?: string;
    description?: string;
    depreciationTypes: DepreciationTypesType[];
}
export interface DepreciationTypePoolsTypeForceMandatory {
    code: string;
    description: string;
    depreciationTypes: DepreciationTypesType[];
}
export declare namespace DepreciationTypePools {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<DepreciationTypePools>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<DepreciationTypePools>;
    /**
     * Static representation of the one-to-many navigation property [[depreciationTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_TYPES: OneToManyLink<DepreciationTypePools, DepreciationTypes>;
    /**
     * All fields of the DepreciationTypePools entity.
     */
    const _allFields: Array<StringField<DepreciationTypePools> | OneToManyLink<DepreciationTypePools, DepreciationTypes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DepreciationTypePools>;
    /**
     * All key fields of the DepreciationTypePools entity.
     */
    const _keyFields: Array<Field<DepreciationTypePools>>;
    /**
     * Mapping of all key field names to the respective static field property DepreciationTypePools.
     */
    const _keys: {
        [keys: string]: Field<DepreciationTypePools>;
    };
}
//# sourceMappingURL=DepreciationTypePools.d.ts.map