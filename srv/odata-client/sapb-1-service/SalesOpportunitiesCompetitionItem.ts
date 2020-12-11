/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunitiesCompetitionItem
 */
export interface SalesOpportunitiesCompetitionItem {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: number;
  /**
   * Competition.
   * @nullable
   */
  competition?: number;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Won Or Lost.
   * @nullable
   */
  wonOrLost?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesCompetitionItem.build]] instead.
 */
export function createSalesOpportunitiesCompetitionItem(json: any): SalesOpportunitiesCompetitionItem {
  return SalesOpportunitiesCompetitionItem.build(json);
}

/**
 * SalesOpportunitiesCompetitionItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesCompetitionItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesCompetitionItem> {
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.rowNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.competition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  competition: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Competition', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.wonOrLost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wonOrLost: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WonOrLost', this, 'Edm.String');

  /**
   * Creates an instance of SalesOpportunitiesCompetitionItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunitiesCompetitionItem);
  }
}

export namespace SalesOpportunitiesCompetitionItem {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesCompetitionItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesCompetitionItem>[] = [{
    originalName: 'RowNo',
    name: 'rowNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Competition',
    name: 'competition',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WonOrLost',
    name: 'wonOrLost',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesCompetitionItem {
    return deserializeComplexTypeV4(json, SalesOpportunitiesCompetitionItem);
  }
}
