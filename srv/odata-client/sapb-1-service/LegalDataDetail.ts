/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalDataLineTypeEnum } from './LegalDataLineTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * LegalDataDetail
 */
export interface LegalDataDetail {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Line Sequence.
   * @nullable
   */
  lineSequence?: number;
  /**
   * Line Type.
   * @nullable
   */
  lineType?: LegalDataLineTypeEnum;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: number;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[LegalDataDetail.build]] instead.
 */
export function createLegalDataDetail(json: any): LegalDataDetail {
  return LegalDataDetail.build(json);
}

/**
 * LegalDataDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LegalDataDetailField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LegalDataDetail> {
  /**
   * Representation of the [[LegalDataDetail.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LegalDataDetail.lineSequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineSequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineSequence', this, 'Edm.Int32');
  /**
   * Representation of the [[LegalDataDetail.lineType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineType', this);
  /**
   * Representation of the [[LegalDataDetail.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[LegalDataDetail.taxRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxRate', this, 'Edm.Double');
  /**
   * Representation of the [[LegalDataDetail.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');

  /**
   * Creates an instance of LegalDataDetailField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, LegalDataDetail);
  }
}

export namespace LegalDataDetail {
  /**
   * Metadata information on all properties of the `LegalDataDetail` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LegalDataDetail>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineSequence',
    name: 'lineSequence',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineType',
    name: 'lineType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxRate',
    name: 'taxRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Amount',
    name: 'amount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): LegalDataDetail {
    return deserializeComplexTypeV4(json, LegalDataDetail);
  }
}
