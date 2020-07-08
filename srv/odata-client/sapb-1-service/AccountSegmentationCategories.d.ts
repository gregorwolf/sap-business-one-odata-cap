import { AccountSegmentationCategoriesRequestBuilder } from './AccountSegmentationCategoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "AccountSegmentationCategories" of service "SAPB1".
 */
export declare class AccountSegmentationCategories extends Entity implements AccountSegmentationCategoriesType {
    /**
     * Technical entity name for AccountSegmentationCategories.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AccountSegmentationCategories.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Segment Id.
     * @nullable
     */
    segmentId?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Short Name.
     * @nullable
     */
    shortName?: string;
    /**
     * One-to-one navigation property to the [[AccountSegmentations]] entity.
     */
    accountSegmentation: AccountSegmentations;
    /**
     * Returns an entity builder to construct instances `AccountSegmentationCategories`.
     * @returns A builder that constructs instances of entity type `AccountSegmentationCategories`.
     */
    static builder(): EntityBuilderType<AccountSegmentationCategories, AccountSegmentationCategoriesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AccountSegmentationCategories` entity type.
     * @returns A `AccountSegmentationCategories` request builder.
     */
    static requestBuilder(): AccountSegmentationCategoriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountSegmentationCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccountSegmentationCategories`.
     */
    static customField(fieldName: string): CustomField<AccountSegmentationCategories>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { AccountSegmentations, AccountSegmentationsType } from './AccountSegmentations';
export interface AccountSegmentationCategoriesType {
    segmentId?: number;
    code?: string;
    name?: string;
    shortName?: string;
    accountSegmentation: AccountSegmentationsType;
}
export interface AccountSegmentationCategoriesTypeForceMandatory {
    segmentId: number;
    code: string;
    name: string;
    shortName: string;
    accountSegmentation: AccountSegmentationsType;
}
export declare namespace AccountSegmentationCategories {
    /**
     * Static representation of the [[segmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEGMENT_ID: NumberField<AccountSegmentationCategories>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<AccountSegmentationCategories>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<AccountSegmentationCategories>;
    /**
     * Static representation of the [[shortName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_NAME: StringField<AccountSegmentationCategories>;
    /**
     * Static representation of the one-to-one navigation property [[accountSegmentation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_SEGMENTATION: OneToOneLink<AccountSegmentationCategories, AccountSegmentations>;
    /**
     * All fields of the AccountSegmentationCategories entity.
     */
    const _allFields: Array<NumberField<AccountSegmentationCategories> | StringField<AccountSegmentationCategories> | OneToOneLink<AccountSegmentationCategories, AccountSegmentations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AccountSegmentationCategories>;
    /**
     * All key fields of the AccountSegmentationCategories entity.
     */
    const _keyFields: Array<Field<AccountSegmentationCategories>>;
    /**
     * Mapping of all key field names to the respective static field property AccountSegmentationCategories.
     */
    const _keys: {
        [keys: string]: Field<AccountSegmentationCategories>;
    };
}
//# sourceMappingURL=AccountSegmentationCategories.d.ts.map