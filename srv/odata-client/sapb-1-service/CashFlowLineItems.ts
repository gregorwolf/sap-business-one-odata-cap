/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashFlowLineItemsRequestBuilder } from './CashFlowLineItemsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "CashFlowLineItems" of service "SAPB1".
 */
export class CashFlowLineItems extends Entity implements CashFlowLineItemsType {
  /**
   * Technical entity name for CashFlowLineItems.
   */
  static _entityName = 'CashFlowLineItems';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CashFlowLineItems.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  static builder(): EntityBuilderType<CashFlowLineItems, CashFlowLineItemsTypeForceMandatory> {
    return Entity.entityBuilder(CashFlowLineItems);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CashFlowLineItems` entity type.
   * @returns A `CashFlowLineItems` request builder.
   */
  static requestBuilder(): CashFlowLineItemsRequestBuilder {
    return new CashFlowLineItemsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CashFlowLineItems`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CashFlowLineItems`.
   */
  static customField(fieldName: string): CustomField<CashFlowLineItems> {
    return Entity.customFieldSelector(fieldName, CashFlowLineItems);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace CashFlowLineItems {
  /**
   * Static representation of the [[lineItemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINE_ITEM_ID: NumberField<CashFlowLineItems> = new NumberField('LineItemID', CashFlowLineItems, 'Edm.Int32');
  /**
   * Static representation of the [[lineItemName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINE_ITEM_NAME: StringField<CashFlowLineItems> = new StringField('LineItemName', CashFlowLineItems, 'Edm.String');
  /**
   * Static representation of the [[parentArticle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_ARTICLE: NumberField<CashFlowLineItems> = new NumberField('ParentArticle', CashFlowLineItems, 'Edm.Int32');
  /**
   * Static representation of the [[level]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL: NumberField<CashFlowLineItems> = new NumberField('Level', CashFlowLineItems, 'Edm.Int32');
  /**
   * Static representation of the [[drawer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAWER: NumberField<CashFlowLineItems> = new NumberField('Drawer', CashFlowLineItems, 'Edm.Int32');
  /**
   * All fields of the CashFlowLineItems entity.
   */
  export const _allFields: Array<NumberField<CashFlowLineItems> | StringField<CashFlowLineItems>> = [
    CashFlowLineItems.LINE_ITEM_ID,
    CashFlowLineItems.LINE_ITEM_NAME,
    CashFlowLineItems.PARENT_ARTICLE,
    CashFlowLineItems.LEVEL,
    CashFlowLineItems.DRAWER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CashFlowLineItems> = new AllFields('*', CashFlowLineItems);
  /**
   * All key fields of the CashFlowLineItems entity.
   */
  export const _keyFields: Array<Field<CashFlowLineItems>> = [CashFlowLineItems.LINE_ITEM_ID];
  /**
   * Mapping of all key field names to the respective static field property CashFlowLineItems.
   */
  export const _keys: { [keys: string]: Field<CashFlowLineItems> } = CashFlowLineItems._keyFields.reduce((acc: { [keys: string]: Field<CashFlowLineItems> }, field: Field<CashFlowLineItems>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
