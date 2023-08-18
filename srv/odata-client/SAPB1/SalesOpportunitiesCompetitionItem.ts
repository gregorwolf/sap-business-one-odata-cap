/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThreatLevelEnum } from './ThreatLevelEnum';
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
 * SalesOpportunitiesCompetitionItem
 */
export interface SalesOpportunitiesCompetitionItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Competition.
   * @nullable
   */
  competition?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Won Or Lost.
   * @nullable
   */
  wonOrLost?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Threat Level.
   * @nullable
   */
  threatLevel?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * SalesOpportunitiesCompetitionItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesCompetitionItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesOpportunitiesCompetitionItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesOpportunitiesCompetitionItem.rowNo} property for query construction.
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
   * Representation of the {@link SalesOpportunitiesCompetitionItem.competition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  competition: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Competition', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesCompetitionItem.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);
  /**
   * Representation of the {@link SalesOpportunitiesCompetitionItem.sequenceNo} property for query construction.
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
   * Representation of the {@link SalesOpportunitiesCompetitionItem.wonOrLost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wonOrLost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WonOrLost', 'Edm.String', true);
  /**
   * Representation of the {@link SalesOpportunitiesCompetitionItem.threatLevel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  threatLevel: EnumField<
    EntityT,
    DeSerializersT,
    ThreatLevelEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ThreatLevel', ThreatLevelEnum, true);

  /**
   * Creates an instance of SalesOpportunitiesCompetitionItemField.
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
      SalesOpportunitiesCompetitionItem,
      fieldOptions
    );
  }
}

export namespace SalesOpportunitiesCompetitionItem {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesCompetitionItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesCompetitionItem>[] =
    [
      {
        originalName: 'RowNo',
        name: 'rowNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Competition',
        name: 'competition',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Details',
        name: 'details',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'SequenceNo',
        name: 'sequenceNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'WonOrLost',
        name: 'wonOrLost',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ThreatLevel',
        name: 'threatLevel',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
