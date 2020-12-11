import { ChooseFromListRequestBuilder } from './ChooseFromListRequestBuilder';
import { ChooseFromListLine } from './ChooseFromListLine';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ChooseFromList" of service "SAPB1".
 */
export declare class ChooseFromList extends EntityV4 implements ChooseFromListType {
    /**
     * Technical entity name for ChooseFromList.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Object Name.
     * @nullable
     */
    objectName?: string;
    /**
     * Choose From List Lines.
     * @nullable
     */
    chooseFromListLines?: ChooseFromListLine[];
    /**
     * Returns an entity builder to construct instances of `ChooseFromList`.
     * @returns A builder that constructs instances of entity type `ChooseFromList`.
     */
    static builder(): EntityBuilderType<ChooseFromList, ChooseFromListType>;
    /**
     * Returns a request builder to construct requests for operations on the `ChooseFromList` entity type.
     * @returns A `ChooseFromList` request builder.
     */
    static requestBuilder(): ChooseFromListRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChooseFromList`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ChooseFromList`.
     */
    static customField(fieldName: string): CustomFieldV4<ChooseFromList>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ChooseFromListType {
    objectName?: string | null;
    chooseFromListLines?: ChooseFromListLine[] | null;
}
export declare namespace ChooseFromList {
    /**
     * Static representation of the [[objectName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_NAME: StringField<ChooseFromList>;
    /**
     * Static representation of the [[chooseFromListLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHOOSE_FROM_LIST_LINES: CollectionField<ChooseFromList, ChooseFromListLine>;
    /**
     * All fields of the ChooseFromList entity.
     */
    const _allFields: Array<StringField<ChooseFromList> | CollectionField<ChooseFromList, ChooseFromListLine>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ChooseFromList>;
    /**
     * All key fields of the ChooseFromList entity.
     */
    const _keyFields: Array<Field<ChooseFromList>>;
    /**
     * Mapping of all key field names to the respective static field property ChooseFromList.
     */
    const _keys: {
        [keys: string]: Field<ChooseFromList>;
    };
}
//# sourceMappingURL=ChooseFromList.d.ts.map