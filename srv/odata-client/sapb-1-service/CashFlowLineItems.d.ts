import { CashFlowLineItemsRequestBuilder } from './CashFlowLineItemsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "CashFlowLineItems" of service "SAPB1".
 */
export declare class CashFlowLineItems extends Entity implements CashFlowLineItemsType {
    /**
     * Technical entity name for CashFlowLineItems.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CashFlowLineItems.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Line Item Id.
     * @nullable
     */
    lineItemId?: number;
    /**
     * Line Item Name.
     * @nullable
     */
    lineItemName?: string;
    /**
     * Parent Article.
     * @nullable
     */
    parentArticle?: number;
    /**
     * Level.
     * @nullable
     */
    level?: number;
    /**
     * Drawer.
     * @nullable
     */
    drawer?: number;
    /**
     * Returns an entity builder to construct instances `CashFlowLineItems`.
     * @returns A builder that constructs instances of entity type `CashFlowLineItems`.
     */
    static builder(): EntityBuilderType<CashFlowLineItems, CashFlowLineItemsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CashFlowLineItems` entity type.
     * @returns A `CashFlowLineItems` request builder.
     */
    static requestBuilder(): CashFlowLineItemsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CashFlowLineItems`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CashFlowLineItems`.
     */
    static customField(fieldName: string): CustomField<CashFlowLineItems>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CashFlowLineItemsType {
    lineItemId?: number;
    lineItemName?: string;
    parentArticle?: number;
    level?: number;
    drawer?: number;
}
export interface CashFlowLineItemsTypeForceMandatory {
    lineItemId: number;
    lineItemName: string;
    parentArticle: number;
    level: number;
    drawer: number;
}
export declare namespace CashFlowLineItems {
    /**
     * Static representation of the [[lineItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINE_ITEM_ID: NumberField<CashFlowLineItems>;
    /**
     * Static representation of the [[lineItemName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINE_ITEM_NAME: StringField<CashFlowLineItems>;
    /**
     * Static representation of the [[parentArticle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_ARTICLE: NumberField<CashFlowLineItems>;
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL: NumberField<CashFlowLineItems>;
    /**
     * Static representation of the [[drawer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAWER: NumberField<CashFlowLineItems>;
    /**
     * All fields of the CashFlowLineItems entity.
     */
    const _allFields: Array<NumberField<CashFlowLineItems> | StringField<CashFlowLineItems>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CashFlowLineItems>;
    /**
     * All key fields of the CashFlowLineItems entity.
     */
    const _keyFields: Array<Field<CashFlowLineItems>>;
    /**
     * Mapping of all key field names to the respective static field property CashFlowLineItems.
     */
    const _keys: {
        [keys: string]: Field<CashFlowLineItems>;
    };
}
//# sourceMappingURL=CashFlowLineItems.d.ts.map