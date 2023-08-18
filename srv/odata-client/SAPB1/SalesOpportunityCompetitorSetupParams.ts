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
 * SalesOpportunityCompetitorSetupParams
 */
export interface SalesOpportunityCompetitorSetupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Threat Level.
   * @nullable
   */
  threatLevel?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * SalesOpportunityCompetitorSetupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunityCompetitorSetupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesOpportunityCompetitorSetupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesOpportunityCompetitorSetupParams.sequenceNo} property for query construction.
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
   * Representation of the {@link SalesOpportunityCompetitorSetupParams.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link SalesOpportunityCompetitorSetupParams.threatLevel} property for query construction.
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
   * Creates an instance of SalesOpportunityCompetitorSetupParamsField.
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
      SalesOpportunityCompetitorSetupParams,
      fieldOptions
    );
  }
}

export namespace SalesOpportunityCompetitorSetupParams {
  /**
   * Metadata information on all properties of the `SalesOpportunityCompetitorSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunityCompetitorSetupParams>[] =
    [
      {
        originalName: 'SequenceNo',
        name: 'sequenceNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Name',
        name: 'name',
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
