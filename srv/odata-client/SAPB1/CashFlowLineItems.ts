/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { CashFlowLineItemsApi } from './CashFlowLineItemsApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "CashFlowLineItems" of service "SAPB1".
 */
export class CashFlowLineItems<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashFlowLineItemsType<T>
{
  /**
   * Technical entity name for CashFlowLineItems.
   */
  static _entityName = 'CashFlowLineItems';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowLineItems entity
   */
  static _keys = ['LineItemID'];
  /**
   * Line Item Id.
   */
  lineItemId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Item Name.
   * @nullable
   */
  lineItemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active Line Item.
   * @nullable
   */
  activeLineItem?: BoYesNoEnum | null;
  /**
   * Parent Article.
   * @nullable
   */
  parentArticle?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Level.
   * @nullable
   */
  level?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Drawer.
   * @nullable
   */
  drawer?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: CashFlowLineItemsApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowLineItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lineItemId: DeserializedType<T, 'Edm.Int32'>;
  lineItemName?: DeserializedType<T, 'Edm.String'> | null;
  activeLineItem?: BoYesNoEnum | null;
  parentArticle?: DeserializedType<T, 'Edm.Int32'> | null;
  level?: DeserializedType<T, 'Edm.Int32'> | null;
  drawer?: DeserializedType<T, 'Edm.Int32'> | null;
}
