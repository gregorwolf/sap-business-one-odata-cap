/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * SalesOpportunitiesInterest
 */
export interface SalesOpportunitiesInterest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Primary Interest.
   * @nullable
   */
  primaryInterest?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Interest Id.
   * @nullable
   */
  interestId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * SalesOpportunitiesInterestField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesInterestField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesOpportunitiesInterest,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesOpportunitiesInterest.rowNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesInterest.sequenceNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SequenceNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesInterest.primaryInterest} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryInterest: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('PrimaryInterest', BoYesNoEnum, true);
  /**
   * Representation of the {@link SalesOpportunitiesInterest.interestId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  interestId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InterestId', 'Edm.Int32', true);

  /**
   * Creates an instance of SalesOpportunitiesInterestField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      SalesOpportunitiesInterest,
      fieldOptions
    );
  }
}

export namespace SalesOpportunitiesInterest {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesInterest` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesInterest>[] =
    [
      {
        originalName: 'RowNo',
        name: 'rowNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SequenceNo',
        name: 'sequenceNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PrimaryInterest',
        name: 'primaryInterest',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'InterestId',
        name: 'interestId',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
