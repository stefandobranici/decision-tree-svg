export const data = {
	name: "Renault Clio",
	type: "C",
	children: [
		{
			name: "What type of activity are we doing?",
			type: "Q",
			children: [
				{
					name: "Prospecting",
					type: "C",
					children: [
						{
							name: "What group does the user fit into?",
							type: "Q",
							children: [
								{
									name: "Demographic",
									children: [
										{
											name: "What type of user are they?",
											children: [
												{
													name: "12",
												},
											],
										},
									],
								},
								{
									name: "Competitor",
									children: [
										{
											name: "What type of user are they?",
											children: [
												{
													name: "22",
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					name: "Retargeting",
					type: "C",
					children: [
						{
							name: "What group does the user fit into?",
							type: "Q",
							children: [
								{
									name: "Example 1",
									children: [
										{
											name: "What type of user are they?",
											children: [
												{
													name: "5",
												},
											],
										},
									],
								},
								{
									name: "Example 2",
									children: [
										{
											name: "What type of user are they?",
											children: [
												{
													name: "3",
												},
											],
										},
									],
								},
								{
									name: "Example 3",
									children: [
										{
											name: "What type of user are they?",
											children: [
												{
													name: "4",
												},
											],
										},
									],
								},
								{
									name: "Example 4",
									children: [
										{
											name: "What type of user are they?",
											children: [
												{
													name: "10",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
};
