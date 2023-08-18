/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalDataLineTypeEnum } from './LegalDataLineTypeEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * LegalDataDetail
 */
export interface LegalDataDetail<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Sequence.
   * @nullable
   */
  lineSequence?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Type.
   * @nullable
   */
  lineType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount.
   * @nullable
   */
  amount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * LegalDataDetailField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class LegalDataDetailField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  LegalDataDetail,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link LegalDataDetail.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link LegalDataDetail.lineSequence} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineSequence: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineSequence', 'Edm.Int32', true);
  /**
   * Representation of the {@link LegalDataDetail.lineType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: EnumField<
    EntityT,
    DeSerializersT,
    LegalDataLineTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LineType',
    LegalDataLineTypeEnum,
    true
  );
  /**
   * Representation of the {@link LegalDataDetail.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link LegalDataDetail.taxRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxRate', 'Edm.Double', true);
  /**
   * Representation of the {@link LegalDataDetail.amount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Amount', 'Edm.Double', true);

  /**
   * Creates an instance of LegalDataDetailField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, LegalDataDetail, fieldOptions);
  }
}

export namespace LegalDataDetail {
  /**
   * Metadata information on all properties of the `LegalDataDetail` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LegalDataDetail>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineSequence',
      name: 'lineSequence',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineType',
      name: 'lineType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxCode',
      name: 'taxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxRate',
      name: 'taxRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Amount',
      name: 'amount',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
