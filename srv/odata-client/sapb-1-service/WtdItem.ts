/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WtdItem
 */
export interface WtdItem {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: string;
  /**
   * Effective Date From.
   * @nullable
   */
  effectiveDateFrom?: Moment;
  /**
   * Effective Date To.
   * @nullable
   */
  effectiveDateTo?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[WtdItem.build]] instead.
 */
export function createWtdItem(json: any): WtdItem {
  return WtdItem.build(json);
}

/**
 * WtdItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdItem> {
  /**
   * Representation of the [[WtdItem.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[WtdItem.wTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[WtdItem.effectiveDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WtdItem.effectiveDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateTo', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of WtdItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WtdItem);
  }
}

export namespace WtdItem {
  /**
   * Metadata information on all properties of the `WtdItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtdItem>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WTaxCode',
    name: 'wTaxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'EffectiveDateFrom',
    name: 'effectiveDateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'EffectiveDateTo',
    name: 'effectiveDateTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WtdItem {
    return deserializeComplexTypeV4(json, WtdItem);
  }
}
