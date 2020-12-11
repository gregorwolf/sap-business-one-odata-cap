/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThreatLevelEnum } from './ThreatLevelEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunityCompetitorSetupParams
 */
export interface SalesOpportunityCompetitorSetupParams {
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Threat Level.
   * @nullable
   */
  threatLevel?: ThreatLevelEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityCompetitorSetupParams.build]] instead.
 */
export function createSalesOpportunityCompetitorSetupParams(json: any): SalesOpportunityCompetitorSetupParams {
  return SalesOpportunityCompetitorSetupParams.build(json);
}

/**
 * SalesOpportunityCompetitorSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunityCompetitorSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunityCompetitorSetupParams> {
  /**
   * Representation of the [[SalesOpportunityCompetitorSetupParams.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunityCompetitorSetupParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[SalesOpportunityCompetitorSetupParams.threatLevel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  threatLevel: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ThreatLevel', this);

  /**
   * Creates an instance of SalesOpportunityCompetitorSetupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunityCompetitorSetupParams);
  }
}

export namespace SalesOpportunityCompetitorSetupParams {
  /**
   * Metadata information on all properties of the `SalesOpportunityCompetitorSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunityCompetitorSetupParams>[] = [{
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ThreatLevel',
    name: 'threatLevel',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesOpportunityCompetitorSetupParams {
    return deserializeComplexTypeV4(json, SalesOpportunityCompetitorSetupParams);
  }
}
